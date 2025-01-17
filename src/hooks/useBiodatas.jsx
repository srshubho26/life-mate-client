import PropTypes from 'prop-types';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useTotalBiodatas from './useTotalBiodatas';

const useBiodatas = (filter = {}, limit = 0, page = 0) => {
    const { total, totalLoading } = useTotalBiodatas(filter);
    const axiosPublic = useAxiosPublic();
    const { type = '', minAge = 0, maxAge = 0, division = '', sortAge = '', premium = false, id = '' } = filter;

    const { data: biodatas = [], isPending: loading, refetch } = useQuery({
        queryKey: ['biodatas', type, minAge, maxAge, division, sortAge, limit, page, id],
        queryFn: async () => {
            let query = '';
            if (type) query += `&type=${type}`;
            if (minAge) query += `&minAge=${minAge}`;
            if (maxAge) query += `&maxAge=${maxAge}`;
            if (division) query += `&division=${division}`;
            if (sortAge) query += `&sortAge=${sortAge}`;
            if (premium) query += '&premium=true';
            if (id) query += `&exclude=${id}`

            if (limit) query += `&limit=${limit}&page=${page ? page-1 : 0}`;
            if (query) query = "?" + query.slice(1);
            const res = await axiosPublic(`/biodatas${query}`);
            return res.data;
        }
    })
    return { biodatas, total, loading: (loading || totalLoading), refetch }
};

useBiodatas.propTypes = {
    filter: PropTypes.object,
    limit: PropTypes.number,
    page: PropTypes.number
};

export default useBiodatas;