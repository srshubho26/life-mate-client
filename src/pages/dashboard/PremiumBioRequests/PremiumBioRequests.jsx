import { Helmet } from "react-helmet-async";
import Loading from "../../../components/reusuable/Loading";
import useAxiosWithCredentials from "../../../hooks/useAxiosWithCredentials";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import swal from "sweetalert";
import { useEffect, useState } from "react";
import Title from "../../../components/reusuable/Title";

const PremiumBioRequests = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, []);

    const { email } = useAuth();
    const axiosWithCredentials = useAxiosWithCredentials();
    const [makingPremiumLoading, setMakingPremiumLoading] = useState(false);
    const { data: reqs, isPending: loading, refetch } = useQuery({
        queryKey: ['premium-biodata-reqs-', email],
        queryFn: async () => {
            const res = await axiosWithCredentials('/all-premium-requests');
            return res.data;
        }
    })

    const makePremium = (id, biodata) => {
        swal({
            title: "Are you sure?",
            text: "Your're going to make this biodata premium.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(isConfirmed => {
                if (!isConfirmed) return;
                setMakingPremiumLoading(true);
                axiosWithCredentials.put(`/premium-requests/update/${id}?biodata=${biodata}`)
                    .then(res => {
                        setMakingPremiumLoading(false);
                        if (res.data.acknowledged) {
                            swal('Done', 'Biodata is premium now', 'success');
                            refetch();
                        }
                    })
            })
    }

    return (<section className="relative min-h-screen">
        <Loading loading={loading || makingPremiumLoading} />
        
        <Helmet>
            <title>Premium Biodata Requests || Life Mate</title>
        </Helmet>

        <Title title="Premium Biodata Requests" />

        {!reqs?.length && !loading && <h2 className="text-center my-10 text-lg font-semibold">No Request Available!</h2>}

        {reqs?.length ? <div className="overflow-x-auto min-h-screen mt-10">
            <Table>
                <TableHead>
                    <TableHeadCell className="py-5 bg-element dark:bg-clear-dark">Name</TableHeadCell>

                    <TableHeadCell className="text-nowrap bg-element dark:bg-clear-dark py-5">Email</TableHeadCell>

                    <TableHeadCell className="text-nowrap bg-element dark:bg-clear-dark py-5">Biodata ID</TableHeadCell>

                    <TableHeadCell className="py-5 bg-element dark:bg-clear-dark">Action</TableHeadCell>
                </TableHead>
                <TableBody>

                    {reqs?.map(req => <TableRow key={req._id}
                        className="even:bg-element text-text dark:text-text-dark text-base dark:even:bg-background-dark">
                        <TableCell className="text-nowrap">{req.name}</TableCell>
                        <TableCell>{req.email}</TableCell>
                        <TableCell>#{req.biodata}</TableCell>

                        <TableCell className='text-nowrap'>
                            {req.status === 'pending' ? <button
                                onClick={() => makePremium(req._id, req.biodata)}
                                className="font-medium rounded px-3 py-1 relative bg-expand neomorphism-outset-sm dark:neomorphism-outset-sm-dark hover:text-lite text-primary">
                                <span className="relative z-50">Make Premium</span>
                            </button> : <span className="text-primary font-semibold">Approved</span>}
                        </TableCell>
                    </TableRow>)}

                </TableBody>
            </Table>
        </div> : null}
    </section>);
};

export default PremiumBioRequests;