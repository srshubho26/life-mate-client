import { Datepicker, Label, Select, TextInput } from "flowbite-react";
import Title from "../../../components/reusuable/Title";
import { useEffect, useRef, useState } from "react";
import ImageInput from "../../../components/reusuable/ImageInput";
import ImgPreview from "../../../components/reusuable/ImgPreview";
import useBiodataDetails from "../../../hooks/useBiodataDetails";
import useAuth from '../../../hooks/useAuth';
import swal from "sweetalert";
import useAxiosWithCredentials from "../../../hooks/useAxiosWithCredentials";
import Loading from "../../../components/reusuable/Loading";
import { uploadImg } from "../../../assets/utils";
import { Helmet } from "react-helmet-async";

const EditBiodata = () => {
    const { displayName, email } = useAuth();
    const { details: biodataDetails, loading: detailsLoading } = useBiodataDetails('own', email);
    const [loading, setLoading] = useState(false);
    const axiosWithCredentials = useAxiosWithCredentials();
    const isNewBiodata = !Object.keys(biodataDetails).length;
    const [previewImg, setPreviewImg] = useState('');
    const [dob, setDob] = useState(biodataDetails?.dob || new Date());

    useEffect(() => {
        if (!isNewBiodata) {
            setPreviewImg(biodataDetails.profile_img)
            setDob(biodataDetails.dob)
        }
    }, [isNewBiodata, biodataDetails]);

    const handleSubmit = async e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const type = form.type.value;
        const division = form.division.value;
        const current_division = form.current_division.value;
        const age = form.age.value;
        const occupation = form.occupation.value;
        const height = form.height.value;
        const weight = form.weight.value;
        const race = form.race.value;
        const father = form.father.value;
        const mother = form.mother.value;
        const expectedAge = form.expectedAge.value;
        const expectedHeight = form.expectedHeight.value;
        const expectedWeight = form.expectedWeight.value;
        const phone = form.phone.value;
        const dateInput = new Date(dob);
        const getYearFromInput = dateInput.getFullYear();
        const currentYear = new Date().getFullYear();
        if (getYearFromInput >= currentYear) {
            swal('Error!', "Please enter a valid date", 'error');
            return;
        }

        if (age < 18 || expectedAge < 18) {
            swal('Error!', "Age or Expected Partner's Age can't be less than 18!", 'error');
            return;
        }

        if (phone.length < 11) {
            swal('Error!', "Please enter a valid 11 digits long phone number", 'error');
            return;
        }

        const profile_img = form.profile_img.files[0];


        if (!profile_img && !biodataDetails.profile_img) {
            swal('Error!', "Please upload your image", 'error');
            return;
        }

        setLoading(true);
        const imgLink = {}
        if (profile_img) {
            const uploadRes = await uploadImg(profile_img);
            if (uploadRes.success) {
                imgLink.profile_img = uploadRes.imgUrl;
            }
        }

        const contact = { email, phone }
        const data = { ...biodataDetails, name, type, division, current_division, age, occupation, contact, dob: dateInput.getTime(), height, weight, race, father, mother, expectedAge, expectedHeight, expectedWeight, ...imgLink }

        try {
            const res = await axiosWithCredentials.post(`/biodatas?isNewBiodata=${isNewBiodata}`, data);
            if (res.data.acknowledged) {
                swal('Success', "Your Biodata Is Updated", 'success');
            }
            setLoading(false);

        } catch (err) {
            swal('Oops!', `Something went wrong! Note: ${err.message}`, 'error');
            setLoading(false);
        }

    }

    const photoInputRef = useRef();
    const imgPrevVals = {
        photoInputRef,
        previewImg,
        setPreviewImg,
        className: 'col-span-full max-w-60 aspect-[1/1]'
    }

    const imgInputVals = {
        wrapperClass: previewImg ? 'hidden' : 'col-span-full max-w-md',
        label: 'Profile Picture',
        name: 'profile_img',
        required: isNewBiodata,
        photoInputRef,
        setPreviewImg
    }

    return (<section className="edit-biodata">
        <Helmet>
            <title>Edit Biodata || Love Mate</title>
        </Helmet>
        <Title title="Edit Your Biodata" />

        <form onSubmit={handleSubmit} className="w-full mt-10 grid sm:grid-cols-2 border border-line rounded-lg p-5 gap-5 relative min-h-96">
            <Loading loading={detailsLoading || loading} />
            {!detailsLoading && <>
                <ImageInput {...imgInputVals} />
                <ImgPreview {...imgPrevVals} />

                <div>
                    <div className="mb-2 block">
                        <Label className="text-lg" value="Name" />
                    </div>
                    <TextInput type="text" name="name" defaultValue={biodataDetails?.name || displayName} shadow />
                </div>

                <div className="">
                    <div className="mb-2 block">
                        <Label className="text-lg" value="Gender" />
                    </div>

                    <Select name="type" required defaultValue={biodataDetails?.type || ''}>
                        <option></option>
                        <option>Male</option>
                        <option>Female</option>
                    </Select>
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label className="text-lg" value="Date Of Birth" />
                    </div>
                    <Datepicker name="dob" value={dob} onChange={e => setDob(e)} />
                </div>

                <div className="">
                    <div className="mb-2 block">
                        <Label className="text-lg" value="Height" />
                    </div>

                    <Select name="height" required defaultValue={biodataDetails?.height || ''}>
                        <option></option>
                        <option>Under 5 Feet</option>
                        <option>5 Feet</option>
                        <option>5 Feet 1 Inch</option>
                        <option>5 Feet 2 Inch</option>
                        <option>5 Feet 3 Inch</option>
                        <option>5 Feet 4 Inch</option>
                        <option>5 Feet 5 Inch</option>
                        <option>5 Feet 6 Inch</option>
                        <option>5 Feet 7 Inch</option>
                        <option>5 Feet 8 Inch</option>
                        <option>5 Feet 9 Inch</option>
                        <option>5 Feet 10 Inch</option>
                        <option>5 Feet 11 Inch</option>
                        <option>6 Feet</option>
                        <option>Over 6 Feet</option>
                    </Select>
                </div>

                <div className="">
                    <div className="mb-2 block">
                        <Label className="text-lg" value="Weight" />
                    </div>

                    <Select required name="weight" defaultValue={biodataDetails?.weight || ''}>
                        <option></option>
                        <option>Under 40 Kg</option>
                        <option>40 - 45 Kg</option>
                        <option>46 - 50 Kg</option>
                        <option>51 - 55 Kg</option>
                        <option>56 - 60 Kg</option>
                        <option>61 - 65 Kg</option>
                        <option>66 - 70 Kg</option>
                        <option>71 - 75 Kg</option>
                        <option>76 - 80 Kg</option>
                        <option>Over 80 Kg</option>
                    </Select>
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label className="text-lg" value="Age" />
                    </div>

                    <TextInput type="number" required name="age" shadow defaultValue={biodataDetails?.age || ''} />
                </div>

                <div className="">
                    <div className="mb-2 block">
                        <Label className="text-lg" value="Occupation" />
                    </div>

                    <Select required name="occupation" defaultValue={biodataDetails?.occupation || ''} >
                        <option></option>
                        <option>Govt. Job</option>
                        <option>Private Job</option>
                        <option>Businessman</option>
                        <option>Student</option>
                        <option>Entrepreneur</option>
                    </Select>
                </div>

                <div className="">
                    <div className="mb-2 block">
                        <Label className="text-lg" value="Race" />
                    </div>

                    <Select required name="race" defaultValue={biodataDetails?.race || ''}>
                        <option></option>
                        <option>White</option>
                        <option>Dark</option>
                        <option>Brown</option>
                    </Select>
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label className="text-lg" value="Father's Name" />
                    </div>
                    <TextInput type="text" name="father" required shadow defaultValue={biodataDetails?.father || ''} />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label className="text-lg" value="Mother's Name" />
                    </div>
                    <TextInput type="text" name="mother" required shadow defaultValue={biodataDetails?.mother || ''} />
                </div>

                <div className="">
                    <div className="mb-2 block">
                        <Label className="text-lg" value="Permanent Division" />
                    </div>

                    <Select required name="division" defaultValue={biodataDetails?.division || ''}>
                        <option></option>
                        <option>Dhaka</option>
                        <option>Chattagram</option>
                        <option>Rangpur</option>
                        <option>Barisal</option>
                        <option>Khulna</option>
                        <option>Mymensingh</option>
                        <option>Sylhet</option>
                    </Select>
                </div>

                <div className="">
                    <div className="mb-2 block">
                        <Label className="text-lg" value="Present Division" />
                    </div>

                    <Select required name="current_division" defaultValue={biodataDetails?.current_division || ''}>
                        <option></option>
                        <option>Dhaka</option>
                        <option>Chattagram</option>
                        <option>Rangpur</option>
                        <option>Barisal</option>
                        <option>Khulna</option>
                        <option>Mymensingh</option>
                        <option>Sylhet</option>
                    </Select>
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label className="text-lg" value="Expected Partner's Age" />
                    </div>

                    <TextInput type="number" required name="expectedAge" shadow defaultValue={biodataDetails?.expectedAge || ''} />
                </div>

                <div className="">
                    <div className="mb-2 block">
                        <Label className="text-lg" value="Expected Partner's Height" />
                    </div>

                    <Select name="expectedHeight" required defaultValue={biodataDetails?.expectedHeight || ''}>
                        <option></option>
                        <option>Under 5 Feet</option>
                        <option>5 Feet</option>
                        <option>5 Feet 1 Inch</option>
                        <option>5 Feet 2 Inch</option>
                        <option>5 Feet 3 Inch</option>
                        <option>5 Feet 4 Inch</option>
                        <option>5 Feet 5 Inch</option>
                        <option>5 Feet 6 Inch</option>
                        <option>5 Feet 7 Inch</option>
                        <option>5 Feet 8 Inch</option>
                        <option>5 Feet 9 Inch</option>
                        <option>5 Feet 10 Inch</option>
                        <option>5 Feet 11 Inch</option>
                        <option>6 Feet</option>
                        <option>Over 6 Feet</option>
                    </Select>
                </div>

                <div className="">
                    <div className="mb-2 block">
                        <Label className="text-lg" value="Expected Partner's Weight" />
                    </div>

                    <Select required name="expectedWeight" defaultValue={biodataDetails?.expectedWeight || ''}>
                        <option></option>
                        <option>Under 40 Kg</option>
                        <option>40 - 45 Kg</option>
                        <option>46 - 50 Kg</option>
                        <option>51 - 55 Kg</option>
                        <option>56 - 60 Kg</option>
                        <option>61 - 65 Kg</option>
                        <option>66 - 70 Kg</option>
                        <option>71 - 75 Kg</option>
                        <option>76 - 80 Kg</option>
                        <option>Over 80 Kg</option>
                    </Select>
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label className="text-lg" value="Your Email" />
                    </div>
                    <TextInput type="email" defaultValue={email} readOnly shadow />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label className="text-lg" value="Phone Number" />
                    </div>

                    <TextInput type="number" required name="phone" shadow defaultValue={biodataDetails?.contact?.phone || ''} />
                </div>

                <div className="col-span-full">
                    <button className="w-fit text-primary border border-primary transition-colors hover:bg-primary font-semibold text-lg rounded-lg px-3 sm:px-6 py-2 hover:text-lite uppercase">
                        Save And Publish Now
                    </button>
                </div>
            </>}
        </form>
    </section>);
};

export default EditBiodata;