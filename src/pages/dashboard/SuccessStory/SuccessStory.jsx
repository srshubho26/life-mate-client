import { Helmet } from "react-helmet-async";
import Title from "../../../components/reusuable/Title";
import { Datepicker, Label, Textarea, TextInput } from "flowbite-react";
import Loading from "../../../components/reusuable/Loading";
import ImageInput from "../../../components/reusuable/ImageInput";
import ImgPreview from "../../../components/reusuable/ImgPreview";
import { useRef, useState } from "react";
import useBiodataDetails from "../../../hooks/useBiodataDetails";
import useAuth from "../../../hooks/useAuth";
import StarRatings from "react-star-ratings";
import swal from "sweetalert";
import { uploadImg } from "../../../assets/utils";
import useAxiosWithCredentials from "../../../hooks/useAxiosWithCredentials";
import { useQuery } from "@tanstack/react-query";
import EditModal from "./parts/EditModal";

const SuccessStory = () => {
    const { email } = useAuth();
    const axiosWithCredentials = useAxiosWithCredentials();
    const [previewImg, setPreviewImg] = useState('');
    const [partnerBio, setPartnerBio] = useState(null);
    const { details, loading } = useBiodataDetails('own', email);
    const { details: partner, loading: partnerLoading } = useBiodataDetails(partnerBio);
    const [rating, setRating] = useState(0);
    const [submitLoading, setSubmitLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const photoInputRef = useRef();
    const imgPrevVals = {
        photoInputRef,
        previewImg,
        setPreviewImg,
        className: 'col-span-full max-w-60 aspect-[1/1]'
    }

    const imgInputVals = {
        wrapperClass: previewImg ? 'hidden' : '',
        label: 'Couple Image',
        labelClass: 'text-lg',
        name: 'couple_img',
        required: true,
        photoInputRef,
        setPreviewImg
    }

    const { data: story, isPending: gettingStory, refetch } = useQuery({
        queryKey: ['success-story-', email, details?.biodata_id],
        queryFn: async () => {
            const res = await axiosWithCredentials(`/success-stories/${details?.biodata_id}`);
            return res.data;
        }
    })

    const handleSubmit = async e => {
        e.preventDefault();
        const form = e.target;
        if (!Object.keys(partner).length) {
            swal("Wait!", "Please enter your partner's biodata ID correctly!", "warning");
            return;
        }

        const partner_bio = partner.biodata_id;
        const self_bio = details.biodata_id;
        if (partner_bio === self_bio) {
            swal("Wait!", "Self and partner's biodata ID can't be the same!", "warning");
            return;
        }

        if (partner.type === details.type) {
            swal("Wait!", "Gender can't be the same", "warning");
            return;
        }

        if (rating < 1) {
            swal("Wait!", "Please rate us between 1 to 5", "warning");
            return;
        }

        setSubmitLoading(true);
        const res = await uploadImg(form.couple_img.files[0]);
        if (!res.success) {
            swal("Error!", res.message, "error");
            setSubmitLoading(false);
            return
        }
        let couple_img = res.imgUrl;

        const name = details.name;
        const marriage_date = new Date(form.marriage_date.value).getTime();
        const review = form.review.value;
        const data = { type: details.type, name, email, self_bio, partner_bio, marriage_date, review, rating, couple_img }
        try {
            const publishRes = await axiosWithCredentials.post("/success-story", data);
            if (publishRes.data.insertedId) {
                swal("Done", "Your success story is published.", "success");
                setSubmitLoading(false);
                refetch();
            }

        } catch (err) {
            swal("Error!", `Something went wrong! Note: ${err.message}`, "error");
            setSubmitLoading(false);
        }
    }

    return (<section className="relative">
        <Loading loading={loading || submitLoading || gettingStory} />
        <Helmet>
            <title>Success Story || Love Mate</title>
        </Helmet>
        <Title title="Success Story" />

        {story?.self_bio ? <div className="max-w-screen-md mx-auto mt-14 flex gap-5">
            <img src={story?.couple_img} className="p-2 w-full max-w-80 aspect-square object-cover border border-line rounded-md" />

            <div className="grow">
                <button
                onClick={()=>setOpenModal(true)}
                    className="text-primary border border-primary transition-colors hover:bg-primary font-semibold text-sm sm:text-lg rounded-lg px-8 py-2 hover:text-lite">
                    Edit Review
                </button>

                <h3 className="flex-col sm:flex-row border-b border-line pb-2 text-2xl font-semibold text-text flex sm:items-center sm:gap-5 my-5">
                    <span>{story?.name}</span>

                    <StarRatings
                        rating={story?.rating}
                        starEmptyColor="#f5dca0"
                        starRatedColor="#d833db"
                        starDimension="30px"
                        starSpacing="2px"
                        starHoverColor="#d833db"
                        numberOfStars={5}
                    />
                </h3>
                <p>{story?.review}</p>
            </div>

            <EditModal
                openModal={openModal}
                setOpenModal={setOpenModal}
                story={story}
            />
        </div> : <form onSubmit={handleSubmit} className="bg-element w-full mt-10 grid border border-line rounded-lg p-5 gap-5 min-h-96 max-w-screen-md mx-auto">

            <ImageInput {...imgInputVals} />
            <ImgPreview {...imgPrevVals} />

            <div>
                <div className="mb-2 block">
                    <Label className="text-lg" value="Your Biodata ID" />
                </div>
                <TextInput type="text" readOnly defaultValue={details?.biodata_id} shadow />
            </div>

            <div>
                <div className="mb-2 block">
                    <Label className="text-lg" value="Partner's Biodata ID" />
                </div>

                <TextInput type="number" required onChange={e => setPartnerBio(e.target.value || 0)} />

                {partnerBio ? <div className="border flex flex-col sm:flex-row items-center gap-3 border-line rounded p-3 max-w-md mt-2 relative min-h-32">
                    <Loading loading={partnerLoading} />
                    {Object.keys(partner).length ? <>
                        <img src={partner?.profile_img} className="w-48 h-48 object-cover" />
                        <div>
                            <h4 className="text-primary font-semibold text-xl">{partner?.name}</h4>
                            <p className="text-text">{partner?.occupation}</p>
                        </div>
                    </> : <span>No Biodata Matched</span>}
                </div> : null}
            </div>

            <div>
                <div className="mb-2 block">
                    <Label className="text-lg" value="Marriage Date" />
                </div>
                <Datepicker name="marriage_date" maxDate={new Date()} />
            </div>

            <div >
                <div className="mb-2 block">
                    <Label className="text-lg" value="Review" />
                </div>
                <Textarea name="review" placeholder="Write your review" required rows={8} />
            </div>

            <div className="flex items-center gap-5">
                <StarRatings
                    rating={rating}
                    starEmptyColor="#f5dca0"
                    starRatedColor="#d833db"
                    starDimension="30px"
                    starSpacing="2px"
                    starHoverColor="#d833db"
                    numberOfStars={5}
                    changeRating={rate => setRating(rate)}
                />

                <button className="w-fit text-primary border border-primary transition-colors hover:bg-primary font-semibold text-lg rounded-lg px-3 sm:px-6 py-2 hover:text-lite uppercase">
                    Publish
                </button>
            </div>

        </form>}
    </section>)
};

export default SuccessStory;