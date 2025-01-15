import { useQuery } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import useAxiosWithCredentials from './useAxiosWithCredentials';

const useIsPremiumRequested = (id) => {
    const axiosWithCredentials = useAxiosWithCredentials();

    const { data: isRequested, isPending: requestChecking } = useQuery({
        queryKey: ['isPremiumRequested-', id],
        queryFn: async () => {
            const res = await axiosWithCredentials(`/is-requested/${id}`);
            return res.data.isRequested;
        }
    })
    return {isRequested, requestChecking}
};

useIsPremiumRequested.propTypes = {
    id: PropTypes.string
};

export default useIsPremiumRequested;