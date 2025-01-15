import { Dropdown, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { Helmet } from "react-helmet-async";
import Title from "../../../components/reusuable/Title";
import useMyContactRequests from "../../../hooks/useMyContactRequests";
import Loading from "../../../components/reusuable/Loading";
import swal from "sweetalert";
import useAxiosWithCredentials from "../../../hooks/useAxiosWithCredentials";
import useAuth from "../../../hooks/useAuth";

const MyContactRequests = () => {
    const { email } = useAuth();
    const { myContactReqs, loading } = useMyContactRequests();
    const axiosWithCredentials = useAxiosWithCredentials();

    const handleDelete = id => {

    }

    return (<section className="relative">
        <Loading loading={loading} />
        <Helmet>
            <title>My Contact Requests || Love Mate</title>
        </Helmet>

        <Title title="Contact Requests" />

        <div className="overflow-x-auto min-h-screen mt-10">
            <Table>
                <TableHead>
                    <TableHeadCell>Name</TableHeadCell>
                    <TableHeadCell>Biodata ID</TableHeadCell>
                    <TableHeadCell>Status</TableHeadCell>
                    <TableHeadCell>Contact Info</TableHeadCell>
                    <TableHeadCell>
                        <span className="sr-only">Edit</span>
                    </TableHeadCell>
                </TableHead>
                <TableBody>

                    {myContactReqs?.map(req => <TableRow key={req._id}
                        className="even:bg-element text-primary text-base dark:border-gray-700 dark:bg-gray-800">
                        <TableCell>{req.name}</TableCell>
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
                                onClick={() => handleDelete(req._id,)}
                                className="font-medium text-red-600 ">
                                Delete
                            </button>
                        </TableCell>
                    </TableRow>)}

                </TableBody>
            </Table>
        </div>
    </section>);
};

export default MyContactRequests;