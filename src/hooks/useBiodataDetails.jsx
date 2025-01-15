import { useQuery } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import useAxiosWithCredentials from '../hooks/useAxiosWithCredentials';

const useBiodataDetails = (id, email='') => {
    const axiosWithCredentials = useAxiosWithCredentials();

    const {data: details={}, isPending: loading} = useQuery({
        queryKey: ['details', id, email],
        queryFn: async()=>{
            let query = id;
            if(id==='own' && email){
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