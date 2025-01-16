import { Dropdown, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { Helmet } from "react-helmet-async";
import Title from "../../../components/reusuable/Title";
import useMyContactRequests from "../../../hooks/useMyContactRequests";
import Loading from "../../../components/reusuable/Loading";
import swal from "sweetalert";
import useAxiosWithCredentials from "../../../hooks/useAxiosWithCredentials";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";

const MyContactRequests = () => {
    const { email } = useAuth();
    const { myContactReqs, loading ,refetch} = useMyContactRequests();
    const axiosWithCredentials = useAxiosWithCredentials();
    const [deleteLoading, setDeleteLoading] = useState(false);

    const handleDelete = id => {
        swal({
            title: "Are you sure?",
            text: "Your request will be removed permanently.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(isConfirmed => {
                if(!isConfirmed)return;
                setDeleteLoading(true);
                axiosWithCredentials.delete(`/contact-requests/${id}?email=${email}`)
                    .then(res => {
                        setDeleteLoading(false);
                        if (res.data.acknowledged && res.data.deletedCount>0) {
                            swal('Done', 'Your contact request is deleted successfully', 'success');
                            refetch();
                        }
                    })
            })
    }

    return (<section className="relative min-h-screen">
        <Loading loading={loading || deleteLoading} />
        <Helmet>
            <title>My Contact Requests || Love Mate</title>
        </Helmet>

        <Title title="Contact Requests" />

        {!myContactReqs?.length && !loading && <h2 className="text-center my-10 text-lg font-semibold">No Contact Request Available!</h2>}
 
        {myContactReqs?.length ? <div className="overflow-x-auto min-h-screen mt-10">
            <Table>
                <TableHead>
                    <TableHeadCell className="py-5 bg-element">Name</TableHeadCell>
                    <TableHeadCell className="text-nowrap bg-element py-5">Biodata ID</TableHeadCell>
                    <TableHeadCell className="bg-element py-5">Status</TableHeadCell>
                    <TableHeadCell className="text-nowrap bg-element py-5">Contact Info</TableHeadCell>
                    <TableHeadCell className="bg-element py-5 rounded-tr-md">
                        <span className="sr-only">Edit</span>
                    </TableHeadCell>
                </TableHead>
                <TableBody>

                    {myContactReqs?.map(req => <TableRow key={req._id}
                        className="even:bg-element text-primary text-base dark:border-gray-700 dark:bg-gray-800">
                        <TableCell className="text-nowrap">{req.name}</TableCell>
                        <TableCell>#{req.biodata_id}</TableCell>

                        <TableCell className='capitalize font-semibold'>
                            {req.status}
                        </TableCell>

                        <TableCell>
                            {req.status === 'pending' ? 'N/A' : <Dropdown dismissOnClick={false} renderTrigger={() => <span className="cursor-pointer font-semibold">View</span>}>
                                <Dropdown.Item>{req.contact.email}</Dropdown.Item>
                                <Dropdown.Item>{req.contact.phone}</Dropdown.Item>
                            </Dropdown>}
                        </TableCell>
                        <TableCell>
                            <button
                                onClick={() => handleDelete(req._id)}
                                className="font-medium text-red-600 ">
                                Delete
                            </button>
                        </TableCell>
                    </TableRow>)}

                </TableBody>
            </Table>
        </div> : null}
    </section>);
};

export default MyContactRequests;