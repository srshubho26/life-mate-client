import swal from "sweetalert";
import useAxiosWithCredentials from "../../../hooks/useAxiosWithCredentials";
import useAuth from "../../../hooks/useAuth";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../components/reusuable/Loading";
import { Helmet } from "react-helmet-async";
import Title from "../../../components/reusuable/Title";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

const ContactReqs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { email } = useAuth();
    const axiosWithCredentials = useAxiosWithCredentials();
    const [approveLoading, setApproveLoading] = useState(false);
    const { data: contactReqs, isPending: loading, refetch } = useQuery({
        queryKey: ['contact-reqs-', email],
        queryFn: async () => {
            const res = await axiosWithCredentials('/all-contact-requests');
            return res.data;
        }
    })

    const approveReq = (id) => {
        swal({
            title: "Are you sure?",
            text: "Your're going approve this contact request.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(isConfirmed => {
                if (!isConfirmed) return;
                setApproveLoading(true);
                axiosWithCredentials.put(`/contact-requests/update/${id}`)
                    .then(res => {
                        setApproveLoading(false);
                        if (res.data.acknowledged) {
                            swal('Done', 'Contact request is accepted.', 'success');
                            refetch();
                        }
                    })
            })
    }

    return (<section className="relative min-h-screen">
        <Loading loading={loading || approveLoading} />

        <Helmet>
            <title>Contact Requests || Life Mate</title>
        </Helmet>

        <Title title="Contact Requests" />


        {!contactReqs?.length && !loading && <h2 className="text-center my-10 text-lg font-semibold">No Contact Request Available!</h2>}

        {contactReqs?.length ? <div className="overflow-x-auto min-h-screen mt-10">
            <Table>
                <TableHead>
                    <TableHeadCell className="py-5 text-nowrap bg-element">Applicant&apos;s Name</TableHeadCell>

                    <TableHeadCell className="text-nowrap bg-element py-5">Applicant&apos;s Email</TableHeadCell>

                    <TableHeadCell className="text-nowrap bg-element py-5">Requested For</TableHeadCell>

                    <TableHeadCell className="py-5 bg-element">Action</TableHeadCell>
                </TableHead>
                <TableBody>

                    {contactReqs?.map(req => <TableRow key={req._id}
                        className="even:bg-element text-primary text-base dark:border-gray-700 dark:bg-gray-800">
                        <TableCell className="text-nowrap">{req.requestedBy.name}</TableCell>
                        <TableCell>{req.requestedBy.email}</TableCell>
                        <TableCell>#{req.requestedFor}</TableCell>

                        <TableCell className='text-nowrap'>
                            {req.status === 'pending' ? <button
                                onClick={() => approveReq(req._id)}
                                className="font-medium border border-primary rounded-md px-3 py-1 hover:bg-primary hover:text-lite text-primary">
                                Approve
                            </button> : <span className="text-primary font-semibold">Approved</span>}
                        </TableCell>
                    </TableRow>)}

                </TableBody>
            </Table>
        </div> : null}
    </section>
    );
};

export default ContactReqs;