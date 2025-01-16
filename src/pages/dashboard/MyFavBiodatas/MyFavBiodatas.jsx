import Title from '../../../components/reusuable/Title';
import Loading from '../../../components/reusuable/Loading';
import { Helmet } from 'react-helmet-async';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react';
import useMyFavBiodatas from '../../../hooks/useMyFavBiodatas';
import useAxiosWithCredentials from '../../../hooks/useAxiosWithCredentials';
import swal from 'sweetalert';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyFavBiodatas = () => {
    const { email } = useAuth();
    const { myFavReqs, loading, refetch } = useMyFavBiodatas();
    const axiosWithCredentials = useAxiosWithCredentials();
    const [deleteLoading, setDeleteLoading] = useState(false);

    const handleDelete = id => {
        swal({
            title: "Are you sure?",
            text: "Your favourite biodata will be removed permanently.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(isConfirmed => {
                if (!isConfirmed) return;
                setDeleteLoading(true);
                axiosWithCredentials.delete(`/favourites/${id}?email=${email}`)
                    .then(res => {
                        setDeleteLoading(false);
                        if (res.data.acknowledged && res.data.deletedCount > 0) {
                            swal('Done', 'Your favourite biodata is removed successfully', 'success');
                            refetch();
                        }
                    })
            })
    }

    return (<section className="relative">
        <Loading loading={loading || deleteLoading} />
        <Helmet>
            <title>My Favourite Biodatas || Love Mate</title>
        </Helmet>

        <Title title="Favourite Biodatas" />
        {!myFavReqs?.length && !loading && <h2 className="text-center my-10 text-lg font-semibold">No Favourite Biodata Available!</h2>}

        {myFavReqs?.length ? <div className="overflow-x-auto min-h-screen mt-10">
            <Table>
                <TableHead>
                    <TableHeadCell className="py-5 bg-element">Name</TableHeadCell>
                    <TableHeadCell className="text-nowrap bg-element py-5">Biodata ID</TableHeadCell>
                    <TableHeadCell className="py-5 bg-element">Address</TableHeadCell>
                    <TableHeadCell className="py-5 bg-element">Occupation</TableHeadCell>
                    <TableHeadCell className="py-5 bg-element">
                        <span className="sr-only">Delete</span>
                    </TableHeadCell>
                </TableHead>
                <TableBody>

                    {myFavReqs?.map(req => <TableRow key={req._id}
                        className="even:bg-element text-primary text-base dark:border-gray-700 dark:bg-gray-800">
                        <TableCell className="text-nowrap">{req.favs[0].name}</TableCell>
                        <TableCell>#{req.biodata_id}</TableCell>

                        <TableCell className='capitalize font-semibold'>
                            {req.favs[0].division}
                        </TableCell>

                        <TableCell className='capitalize font-semibold'>
                            {req.favs[0].occupation}
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
    </section>
    )
}

export default MyFavBiodatas;