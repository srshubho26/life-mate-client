import { useQuery } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import useAxiosWithCredentials from '../hooks/useAxiosWithCredentials';

const useBiodataDetails = (id) => {
    const axiosWithCredentials = useAxiosWithCredentials();

    const {data: details={}, isPending: loading} = useQuery({
        queryKey: ['details', id],
        queryFn: async()=>{
            const res= await axiosWithCredentials(`/biodatas/${id}`);
            return res.data;
        }
    })

    return {details, loading}
};

useBiodataDetails.propTypes = {
    id: PropTypes.string
};

export default useBiodataDetails;