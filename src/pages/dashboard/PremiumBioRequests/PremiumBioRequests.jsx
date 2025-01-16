import { Helmet } from "react-helmet-async";
import Loading from "../../../components/reusuable/Loading";
import useAxiosWithCredentials from "../../../hooks/useAxiosWithCredentials";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

const PremiumBioRequests = () => {
    const {email} = useAuth();
    const axiosWithCredentials = useAxiosWithCredentials();
    const {data:reqs, isPending:loading, refetch} = useQuery({
        queryKey: ['premium-biodata-reqs-', email],
        queryFn: async()=>{
            const res = await axiosWithCredentials('/all-premium-requests');
            return res.data;
        }
    })

    const changeRole = ()=>{
        refetch();
    }

return (<section className="relative min-h-screen">
            <Loading loading={loading} />
            <Helmet>
                <title>Premium Biodata Requests || Love Mate</title>
            </Helmet>

            {!reqs?.length && !loading && <h2 className="text-center my-10 text-lg font-semibold">No Request Available!</h2>}
            
                    {reqs?.length ? <div className="overflow-x-auto min-h-screen mt-10">
                        <Table>
                            <TableHead>
                                <TableHeadCell className="py-5 bg-element">Name</TableHeadCell>
                                
                                <TableHeadCell className="text-nowrap bg-element py-5">Email</TableHeadCell>

                                <TableHeadCell className="text-nowrap bg-element py-5">Biodata ID</TableHeadCell>
                                
                                <TableHeadCell className="py-5 bg-element">Action</TableHeadCell>
                            </TableHead>
                            <TableBody>
            
                                {reqs?.map(req => <TableRow key={req._id}
                                    className="even:bg-element text-primary text-base dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell className="text-nowrap">{req.name}</TableCell>
                                    <TableCell>{req.email}</TableCell>
                                    <TableCell>#{req.biodata}</TableCell>

                                    <TableCell className='text-nowrap'>
                                        {req.status==='pending' && <button
                                            onClick={() => changeRole(req._id)}
                                            className="font-medium border border-primary rounded-md px-3 py-1 hover:bg-primary hover:text-lite text-primary">
                                            Make Premium
                                        </button>}
                                    </TableCell>
                                </TableRow>)}
            
                            </TableBody>
                        </Table>
                    </div> : null}
        </section>);
};

export default PremiumBioRequests;