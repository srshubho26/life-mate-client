import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosWithCredentials from './useAxiosWithCredentials';

const useMyFavBiodatas = () => {
    const {email} = useAuth();
    const axiosWithCredentials = useAxiosWithCredentials();
    const {data: myFavReqs, isPending: loading, refetch} = useQuery({
        queryKey: ['my-fav-biodatas-', email],
        queryFn: async()=>{
            const res = await axiosWithCredentials(`/favourites/${email}`);
            return res.data;
        }
    })
    return {myFavReqs, loading, refetch}
};

export default useMyFavBiodatas;