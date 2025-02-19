import { Helmet } from 'react-helmet-async';
import Loading from '../../../components/reusuable/Loading';
import useAxiosWithCredentials from '../../../hooks/useAxiosWithCredentials';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, TextInput } from 'flowbite-react';
import Title from '../../../components/reusuable/Title';
import { useEffect, useState } from 'react';
import swal from 'sweetalert';

// Design for search input field
const theme = {
    "field": {
        "input": {
            "colors": {
                "custom": "bg-element"
            }
        }
    }
}

const btnClasses = "font-medium rounded px-3 py-1 relative bg-expand neomorphism-outset-sm dark:neomorphism-outset-sm-dark hover:text-lite text-primary";

const ManageUsers = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, []);

    const { email } = useAuth();
    const axiosWithCredentials = useAxiosWithCredentials();
    const [srchTxt, setSrchTxt] = useState('');
    const [roleChanging, setRoleChanging] = useState(false);
    const { data: users, isPending: loading, refetch } = useQuery({
        queryKey: ['all-users-', email, srchTxt],
        queryFn: async () => {
            const res = await axiosWithCredentials(`/all-users?search=${srchTxt}`);
            return res.data;
        }
    });

    let timeout;
    const handleSearch = e => {
        if (timeout) clearTimeout(timeout);

        timeout = setTimeout(() => {
            setSrchTxt(e.target.value)
        }, 500);
    }

    const makeAdmin = (email, biodata_id, premiumRequest) => {
        swal({
            title: "Are you sure?",
            text: "Your're going make this user admin.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(isConfirmed => {
                if (!isConfirmed) return;
                setRoleChanging(true);
                axiosWithCredentials.put(`/make-admin/${email}?biodata_id=${biodata_id}&premiumStatus=${premiumRequest}`)
                    .then(res => {
                        setRoleChanging(false);
                        if (res.data.modifiedCount>0) {
                            swal('Done', 'This user is  admin now', 'success');
                            refetch();
                        }
                    }).catch(() => {
                        swal('Oops!', 'Something went wrong!', 'error');
                        setRoleChanging(false);
                    })
            })
    }

    const makePremium = (userId, biodata_id) => {
        swal({
            title: "Are you sure?",
            text: "Your're going make this user premium.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(isConfirmed => {
                if (!isConfirmed) return;
                setRoleChanging(true);
                axiosWithCredentials.put(`/make-premium-user/${userId}?bioId=${biodata_id}`)
                    .then(res => {
                        setRoleChanging(false);
                        if (res.data.acknowledged) {
                            swal('Done', 'User is premium now.', 'success');
                            refetch();
                        }
                    }).catch(() => {
                        swal('Oops!', 'Something went wrong!', 'error');
                        setRoleChanging(false);
                    })
            })
    }

    return (<section className="relative min-h-screen sm:py-10">
        <Loading loading={loading || roleChanging} />
        <Helmet>
            <title>Manage Users || Life Mate</title>
        </Helmet>
        <div className='flex gap-5 sm:gap-10 flex-col sm:flex-row items-center justify-between'>
            <Title title="Manage users" />

            <form className='grow max-w-md'>
                <TextInput theme={theme} color='custom' type="text" sizing="md" placeholder='Search User By Name' defaultValue='' onChange={handleSearch} />
            </form>
        </div>

        {!users?.length && !loading && <h2 className="text-center my-10 text-lg font-semibold">No User Available!</h2>}

        {users?.length ? <div className="overflow-x-auto min-h-screen mt-10">
            <Table>
                <TableHead>
                    <TableHeadCell className="py-5 bg-element dark:bg-clear-dark">Name</TableHeadCell>
                    <TableHeadCell className="text-nowrap bg-element dark:bg-clear-dark py-5">Email</TableHeadCell>
                    <TableHeadCell className="text-nowrap bg-element dark:bg-clear-dark py-5">Role</TableHeadCell>
                    <TableHeadCell className="py-5 bg-element dark:bg-clear-dark">Action</TableHeadCell>
                </TableHead>
                <TableBody>

                    {users?.map(user => <TableRow key={user._id}
                        className="even:bg-element text-text dark:text-text-dark text-base  dark:even:bg-background-dark">
                        <TableCell className="text-nowrap">{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>

                        <TableCell>
                            {user.role === 0 ? 'Admin' : user.role === 1 ? 'Premium' : 'General'}
                        </TableCell>

                        <TableCell className='text-nowrap'>
                            {user.role !== 0 && <button
                                onClick={() => makeAdmin(user.email, user.biodata_id, user?.premiumRequest)}
                                className={btnClasses}>
                                <span className='relative z-40'>Make Admin</span>
                            </button>}

                            {user?.premiumRequest === 'pending' && <button
                                onClick={() => makePremium(user._id, user.biodata_id)}
                                className={btnClasses + " ml-2"}>
                                <span className='relative z-40'>Make Premium</span>
                            </button>}
                        </TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
        </div> : null}
    </section>);
};

export default ManageUsers;