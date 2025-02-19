import { Helmet } from "react-helmet-async";
import useBiodataDetails from "../../hooks/useBiodataDetails";
import { Link, useParams } from "react-router-dom";
import Loading from "../../components/reusuable/Loading";
import useIsRequestExists from "../../hooks/useIsRequestExists";
import moment from "moment";
import Title from "../../components/reusuable/Title";
import useBiodatas from "../../hooks/useBiodatas";
import BiodataCard from "../../components/reusuable/BiodataCard";
import { useEffect, useState } from "react";
import useAxiosWithCredentials from "../../hooks/useAxiosWithCredentials";
import useAuth from "../../hooks/useAuth";
import swal from "sweetalert";
import useIsFavourite from "../../hooks/useIsFavourite";
import useIsAdmin from "../../hooks/useIsAdmin";
import { Dropdown, DropdownItem } from "flowbite-react";

const detailsTxtCss = "neomorphism-outset-sm dark:neomorphism-outset-sm-dark rounded px-3 sm:px-5 py-2 basis-1/2 ";
const buttonCss = "text-primary neomorphism-outset-sm bg-expand relative dark:neomorphism-outset-sm-dark transition-colorsd font-semibold text-sm sm:text-lg rounded px-2 sm:px-6 py-2 hover:text-lite";

const BiodataDetails = () => {
    const { biodataId } = useParams();

    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [biodataId]);

    const { email } = useAuth();
    const { details, loading } = useBiodataDetails(biodataId, email);
    const axiosWithCredentials = useAxiosWithCredentials();
    const [favLoading, setFavLoading] = useState(false);
    const { isExists, checking } = useIsRequestExists(details?.biodata_id);
    const { isAdmin, loading: checkingAdmin } = useIsAdmin();
    const { isFavourite, checking: isFavouriteChecking, recheckFav } = useIsFavourite(details?.biodata_id);
    const { biodatas: suggestions, loading: loadingSuggestions } = useBiodatas({
        type: details.type,
        id: details._id
    }, 3);

    const handleAddToFavourite = () => {
        if (isFavouriteChecking) return;
        setFavLoading(true);
        axiosWithCredentials.post(`/favourites/`, { biodata_id: details.biodata_id, email })
            .then(res => {
                if (res.data.insertedId) {
                    swal('Done', 'Biodata added as favourite.', 'success');
                }
                setFavLoading(false);
                recheckFav();
            }).catch(() => {
                setFavLoading(false)
            })
    }

    return (<section className="px-2 py-20  biodatas">
        <Helmet>
            <title>{details?.name || 'Details'} || Life Mate</title>
        </Helmet>

        <div className="mb-10 relative max-w-xl mx-auto p-2 bg-element dark:bg-background-dark neomorphism-outset dark:neomorphism-outset-dark rounded min-h-96">
            <Loading loading={loading || favLoading || isFavouriteChecking} />

            {checking || isFavouriteChecking || loading ? null : <>
                <img src={details?.profile_img} className="w-64 h-64 mx-auto object-cover rounded-md" />

                <div className="text-center">
                    <h3 className="text-primary font-semibold text-lg mt-3 sm:text-3xl">
                        {details?.name}
                        <span className="text-accent ml-2">#{details.biodata_id}</span>
                    </h3>
                    <p className="text-xl text-text dark:text-text-dark">{details?.occupation}</p>

                    {isFavourite && <span className="text-primary font-semibold">Added As Favourite</span>}
                </div>

                <div className="flex items-center gap-2 justify-center mt-5">
                    {details?.contact ? <>
                        <Dropdown
                            renderTrigger={() => <button className={buttonCss}>
                                <span className="relative z-10">Contact Info</span>
                            </button>}
                            dismissOnClick={false}>
                            <DropdownItem>{details.contact.email}</DropdownItem>
                            <DropdownItem>{details.contact.phone}</DropdownItem>
                        </Dropdown>
                    </> : <>{
                        !isExists && !checking && <Link
                            state={{ _id: details._id }}
                            to={`/checkout/${details.biodata_id}`}
                            className={buttonCss}>
                            <span className="relative z-10">Request Contact</span>
                        </Link>}
                    </>}

                    {!isFavourite && !checkingAdmin && !isAdmin && <button
                        onClick={handleAddToFavourite}
                        className={buttonCss}>
                        <span className="relative z-10">Add To Favourite</span>
                    </button>}
                </div>

                <div className="mt-5 text-left capitalize text-sm sm:text-lg dark:text-text-dark">
                    <p className="flex gap-2 mt-2">
                        <span className={detailsTxtCss + ' font-semibold'}>Age: </span>
                        <span className={detailsTxtCss}>{details.age}Y</span>
                    </p>

                    <p className="flex gap-2 mt-2">
                        <span className={detailsTxtCss + ' font-semibold'}>Gender: </span>
                        <span className={detailsTxtCss}>{details.type}</span>
                    </p>

                    <p className="flex gap-2 mt-2">
                        <span className={detailsTxtCss + ' font-semibold'}>Height: </span>
                        <span className={detailsTxtCss}>{details.height}</span>
                    </p>

                    <p className="flex gap-2 mt-2">
                        <span className={detailsTxtCss + ' font-semibold'}>Weight: </span>
                        <span className={detailsTxtCss}>{details.weight}</span>
                    </p>

                    <p className="flex gap-2 mt-2">
                        <span className={detailsTxtCss + ' font-semibold'}>Skin Color: </span>
                        <span className={detailsTxtCss}>{details.race}</span>
                    </p>

                    <p className="flex gap-2 mt-2">
                        <span className={detailsTxtCss + ' font-semibold'}>Division: </span>
                        <span className={detailsTxtCss}>{details.division}</span>
                    </p>

                    <p className="flex gap-2 mt-2">
                        <span className={detailsTxtCss + ' font-semibold'}>Present Division: </span>
                        <span className={detailsTxtCss}>{details.current_division}</span>
                    </p>

                    <p className="flex gap-2 mt-2">
                        <span className={detailsTxtCss + ' font-semibold'}>Date Of Birth: </span>
                        <span className={detailsTxtCss}>
                            {moment(details.dob).format('MMM Do, YYYY')}
                        </span>
                    </p>

                    <p className="flex gap-2 mt-2">
                        <span className={detailsTxtCss + ' font-semibold'}>Father&apos;s Name: </span>
                        <span className={detailsTxtCss}>{details.father}</span>
                    </p>

                    <p className="flex gap-2 mt-2">
                        <span className={detailsTxtCss + ' font-semibold'}>Mother&apos;s Name: </span>
                        <span className={detailsTxtCss}>{details.mother}</span>
                    </p>

                    <p className="flex gap-2 mt-2">
                        <span className={detailsTxtCss + ' font-semibold'}>Expected Partner&apos;s Age: </span>
                        <span className={detailsTxtCss}>{details.expectedAge}Y</span>
                    </p>

                    <p className="flex gap-2 mt-2">
                        <span className={detailsTxtCss + ' font-semibold'}>Expected Partner&apos;s Height: </span>
                        <span className={detailsTxtCss}>{details.expectedHeight}</span>
                    </p>

                    <p className="flex gap-2 mt-2">
                        <span className={detailsTxtCss + ' font-semibold'}>Expected Partner&apos;s Weight: </span>
                        <span className={detailsTxtCss}>{details.expectedWeight}</span>
                    </p>
                </div>
            </>}

        </div>


        <Title title="Recommended" />
        <div className="grid sm:grid-cols-3 gap-5 min-h-32 relative mt-10 max-w-sm sm:max-w-screen-xl mx-auto">
            <Loading loading={loadingSuggestions} />
            {suggestions.map(member => (<BiodataCard key={member._id} member={member} />))}
        </div>
    </section>);
};

export default BiodataDetails;