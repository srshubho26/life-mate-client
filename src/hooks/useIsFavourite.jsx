import PropTypes from 'prop-types';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosWithCredentials from './useAxiosWithCredentials';

const useIsFavourite = (biodata_id) => {
    const axiosWithCredentials = useAxiosWithCredentials();
    const {email} = useAuth();
    const {data: isFavourite, isPending:checking, refetch:recheckFav} = useQuery({
        queryKey: ["is-favourite-", email, biodata_id],
        queryFn: async()=>{
            const res = await axiosWithCredentials(`/is-already-favourite?email=${email}&biodata_id=${biodata_id}`);
            return res.data.isFavourite
        }
    })
    return {isFavourite, checking, recheckFav}
};

useIsFavourite.propTypes = {
    biodata_id: PropTypes.number
};

export default useIsFavourite;