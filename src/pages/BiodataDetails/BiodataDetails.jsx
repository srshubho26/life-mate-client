import { Helmet } from "react-helmet-async";
import useBiodataDetails from "../../hooks/useBiodataDetails";
import { Link, useParams } from "react-router-dom";
import Loading from "../../components/reusuable/Loading";
import useIsRequestExists from "../../hooks/useIsRequestExists";

const BiodataDetails = () => {
    const { id } = useParams();
    const { details, loading } = useBiodataDetails(id);
    const {isExists, checking} = useIsRequestExists(details?.biodata_id);

    return (<section className="px-2 py-20 bg-lite biodatas">
        <Helmet>
            <title>Details || Love Mate</title>
        </Helmet>

        <div className="relative max-w-md mx-auto border p-2 bg-element border-accent rounded-md">
            <Loading loading={loading}/>
            <img src={details?.profile_img} className="w-64 h-64 mx-auto object-cover rounded-md" />

            <div className="text-center">
                <h3 className="text-primary font-semibold text-3xl">
                    {details?.name}
                    <span className="text-accent ml-2">#{details.biodata_id}</span>
                </h3>
                <p className="text-xl text-text dark:text-text-dark">{details?.occupation}</p>
            </div>

            <div className="flex gap-2 justify-center mt-5">
                {!isExists && !checking && <Link
                    state={{_id: details._id}}
                    to={`/checkout/${details.biodata_id}`}
                    className="text-primary border border-primary transition-colors hover:bg-primary font-semibold text-sm sm:text-lg rounded-lg px-2 sm:px-6 py-2 hover:text-lite">
                    Request Contact
                </Link>}

                <button className="text-primary border border-primary transition-colors hover:bg-primary font-semibold text-sm sm:text-lg rounded-lg px-2 sm:px-6 py-2 hover:text-lite">
                    Add To Favourite
                </button>
            </div>

            <div className="mt-5 text-left capitalize text-sm sm:text-lg">
                <p className="flex gap-2 mt-2">
                    <span className="border rounded-md px-3 sm:px-5 py-2 basis-1/2 bg-lite font-semibold">Age: </span>
                    <span className="border rounded-md px-3 sm:px-5 py-2 basis-1/2 bg-lite">{details.age}Y</span>
                </p>

                <p className="flex gap-2 mt-2">
                    <span className="border rounded-md px-3 sm:px-5 py-2 basis-1/2 bg-lite font-semibold">Gender: </span>
                    <span className="border rounded-md px-3 sm:px-5 py-2 basis-1/2 bg-lite">{details.type}</span>
                </p>

                <p className="flex gap-2 mt-2">
                    <span className="border rounded-md px-3 sm:px-5 py-2 basis-1/2 bg-lite font-semibold">Division: </span>
                    <span className="border rounded-md px-3 sm:px-5 py-2 basis-1/2 bg-lite">{details.division}</span>
                </p>

                <p className="flex gap-2 mt-2">
                    <span className="border rounded-md px-3 sm:px-5 py-2 basis-1/2 bg-lite font-semibold">Current Division: </span>
                    <span className="border rounded-md px-3 sm:px-5 py-2 basis-1/2 bg-lite">{details.current_division}</span>
                </p>
            </div>
        </div>
    </section>);
};

export default BiodataDetails;