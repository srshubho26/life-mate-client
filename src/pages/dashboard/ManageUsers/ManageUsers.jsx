import { Helmet } from 'react-helmet-async';
import Loading from '../../../components/reusuable/Loading';
import useAxiosWithCredentials from '../../../hooks/useAxiosWithCredentials';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react';
import Title from '../../../components/reusuable/Title';

const ManageUsers = () => {
    const {email} = useAuth();
    const axiosWithCredentials = useAxiosWithCredentials();
    const {data:users, isPending:loading, refetch} = useQuery({
        queryKey: ['all-users-', email],
        queryFn: async()=>{
            const res = await axiosWithCredentials('/all-users');
            return res.data;
        }
    })

    const changeRole = ()=>{
        refetch();
    }

    return (<section className="relative min-h-screen">
            <Loading loading={loading} />
            <Helmet>
                <title>Manage Users || Love Mate</title>
            </Helmet>
                    <Title title="Manage users" />

            {!users?.length && !loading && <h2 className="text-center my-10 text-lg font-semibold">No User Available!</h2>}
            
                    {users?.length ? <div className="overflow-x-auto min-h-screen mt-10">
                        <Table>
                            <TableHead>
                                <TableHeadCell className="py-5 bg-element">Name</TableHeadCell>
                                <TableHeadCell className="text-nowrap bg-element py-5">Email</TableHeadCell>
                                <TableHeadCell className="py-5 bg-element">Action</TableHeadCell>
                            </TableHead>
                            <TableBody>
            
                                {users?.map(user => <TableRow key={user._id}
                                    className="even:bg-element text-primary text-base dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell className="text-nowrap">{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>

                                    <TableCell className='text-nowrap'>
                                        {user.role!==0 && <button
                                            onClick={() => changeRole(user._id)}
                                            className="font-medium border border-primary rounded-md px-3 py-1 hover:bg-primary hover:text-lite text-primary">
                                            Make Admin
                                        </button>}
                                    </TableCell>
                                </TableRow>)}
            
                            </TableBody>
                        </Table>
                    </div> : null}
        </section>);
};

export default ManageUsers;