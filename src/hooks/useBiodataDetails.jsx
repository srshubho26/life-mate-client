import { useQuery } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import useAxiosWithCredentials from '../hooks/useAxiosWithCredentials';

const useBiodataDetails = (biodataId, email='') => {
    const axiosWithCredentials = useAxiosWithCredentials();

    const {data: details={}, isPending: loading} = useQuery({
        queryKey: ['details', biodataId, email],
        queryFn: async()=>{
            let query = biodataId;
            if(email){
                query += `?email=${email}`
            }
            const res= await axiosWithCredentials(`/biodatas/${query}`);
            return res.data;
        }
    })

    return {details, loading}
};

useBiodataDetails.propTypes = {
    id: PropTypes.string,
    email: PropTypes.string,
};

export default useBiodataDetails;