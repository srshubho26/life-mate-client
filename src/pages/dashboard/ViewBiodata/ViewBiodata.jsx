import { Helmet } from "react-helmet-async";
import Title from "../../../components/reusuable/Title";
import Loading from "../../../components/reusuable/Loading";
import useBiodataDetails from "../../../hooks/useBiodataDetails";
import useAuth from "../../../hooks/useAuth";
import moment from "moment";
import swal from "sweetalert";
import useAxiosWithCredentials from "../../../hooks/useAxiosWithCredentials";
import { useEffect, useState } from "react";
import useIsPremiumRequested from "../../../hooks/useIsPremiumRequested";
import { useNavigate } from "react-router-dom";

const detailsTxtCss = "neomorphism-outset-sm dark:neomorphism-outset-sm-dark rounded px-3 sm:px-5 py-2 basis-1/2 ";

const ViewBiodata = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { email } = useAuth();
    const axiosWithCredentials = useAxiosWithCredentials();
    const { details, loading } = useBiodataDetails('own', email);

    const { request, requestChecking, recheck } = useIsPremiumRequested(details.biodata_id);
    const [premiumLoading, setPremiumLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        if(loading)return;
        if(!Object.keys(details).length){
            swal("Warning", "Please create your biodata first!", "warning")
            .then(()=>{
                navigate("/dashboard/edit-biodata")
            })
        }
    }, [details, navigate, loading]);

    const handlePremiumReq = () => {
        swal({
            title: "Are you sure?",
            text: "Your biodata will be premium & you'll be a premium user as well.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(isConfirmed => {
                if (isConfirmed) {
                    setPremiumLoading(true);
                    axiosWithCredentials.post('/premium-request', { name: details.name, email, biodata: details.biodata_id })
                        .then(res => {
                            if (res.data.acknowledged) {
                                setPremiumLoading(false);
                                swal("Done", "You are under admin approval.", "success");
                                recheck();
                            }
                        }).catch(() => {
                            setPremiumLoading(false);
                        })
                }
            })
    }

    return (<section className="py-5">
        <Helmet>
            <title>View Your Biodata || Life Mate</title>
        </Helmet>

        <Title title="View Your Biodata" />

        <div className="mt-10 relative max-w-xl mx-auto  p-2 bg-element dark:bg-background-dark neomorphism-outset dark:neomorphism-outset-dark rounded">
            <Loading loading={loading || premiumLoading} />
            <div className="w-64 h-64 mx-auto relative">
                {details?.isPremium ? <span className="bg-primary text-lite rounded-md px-3 py-1 font-semibold absolute bottom-0 left-0">Premium</span> : null}

                <img src={details?.profile_img} className="w-full h-full object-cover rounded-md" />
            </div>

            <div className="text-center">
                <h3 className="text-primary font-semibold text-3xl">
                    {details?.name}
                    <span className="text-accent ml-2">#{details.biodata_id}</span>
                </h3>
                <p className="text-xl text-text dark:text-text-dark">{details?.occupation}</p>
            </div>

            {!requestChecking && <div className="flex gap-2 justify-center mt-2 dark:text-lite">
                {request?.isRequested && request?.status === 'pending' && <span>Your biodata is under review</span>}

                {!request?.isRequested && <button
                    onClick={handlePremiumReq}
                    className="text-primary border border-primary transition-colors hover:bg-primary font-semibold text-sm sm:text-lg rounded-lg px-2 sm:px-6 py-2 hover:text-lite">
                    Make Biodata Premium
                </button>
                }
            </div>}

            <div className="mt-5 text-left dark:text-text-dark text-sm sm:text-lg">
                <p className="flex gap-2 mt-2">
                    <span className={detailsTxtCss + ' font-semibold'}>Email: </span>
                    <span className={detailsTxtCss}>{details?.contact?.email}</span>
                </p>

                <p className="flex gap-2 mt-2">
                    <span className={detailsTxtCss + ' font-semibold'}>Phone: </span>
                    <span className={detailsTxtCss}>{details?.contact?.phone}</span>
                </p>

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
        </div>
    </section>);
};

export default ViewBiodata;