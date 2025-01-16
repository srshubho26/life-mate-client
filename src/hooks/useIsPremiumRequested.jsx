import { useQuery } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import useAxiosWithCredentials from './useAxiosWithCredentials';

const useIsPremiumRequested = (biodata_id) => {
    const axiosWithCredentials = useAxiosWithCredentials();

    const { data: request={}, isPending: requestChecking, refetch: recheck } = useQuery({
        queryKey: ['isPremiumRequested-', biodata_id],
        queryFn: async () => {
            const res = await axiosWithCredentials(`/is-requested/${biodata_id}`);
            return res.data;
        }
    })
    return {request, requestChecking, recheck}
};

useIsPremiumRequested.propTypes = {
    id: PropTypes.string
};

export default useIsPremiumRequested;