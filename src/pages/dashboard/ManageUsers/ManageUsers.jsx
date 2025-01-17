import { Helmet } from 'react-helmet-async';
import Loading from '../../../components/reusuable/Loading';
import useAxiosWithCredentials from '../../../hooks/useAxiosWithCredentials';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, TextInput } from 'flowbite-react';
import Title from '../../../components/reusuable/Title';
import { useState } from 'react';

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

const ManageUsers = () => {
    const {email} = useAuth();
    const axiosWithCredentials = useAxiosWithCredentials();
    const [srchTxt, setSrchTxt] = useState('');
    const {data:users, isPending:loading, refetch} = useQuery({
        queryKey: ['all-users-', email, srchTxt],
        queryFn: async()=>{
            const res = await axiosWithCredentials(`/all-users?search=${srchTxt}`);
            return res.data;
        }
    });

    let timeout;
    const handleSearch = e=>{
        if(timeout)clearTimeout(timeout);

        timeout = setTimeout(()=>{
            setSrchTxt(e.target.value)
        }, 500);
    }

    const changeRole = ()=>{
        refetch();
    }

    return (<section className="relative min-h-screen">
            <Loading loading={loading} />
            <Helmet>
                <title>Manage Users || Love Mate</title>
            </Helmet>
                    <div className='flex items-center justify-between'>
                    <Title title="Manage users" />
                    <form className='grow max-w-md'>
                    <TextInput theme={theme} color='custom' type="text" sizing="md" placeholder='Search User By Name' defaultValue='' onChange={handleSearch} />
                    </form>
                    </div>

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