import PropTypes from 'prop-types';
import useAxiosWithCredentials from './useAxiosWithCredentials';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useIsRequestExists = (biodataId) => {
    const user = useAuth();
    const axiosWithCredentials = useAxiosWithCredentials();

        const {data: isExists=false, isPending: checking} = useQuery({
            queryKey: ['isExist', biodataId, user?.email],
            queryFn: async()=>{
                const res = await axiosWithCredentials(`/payments/${biodataId}`);
                return res.data.isExists;
            }
        })
    return {isExists, checking};
};

useIsRequestExists.propTypes = {
    biodataId: PropTypes.string
};

export default useIsRequestExists;