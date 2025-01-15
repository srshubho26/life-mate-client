import PropTypes from 'prop-types';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useBiodatas = (filter={}, limit=0, page=0) => {
    const axiosPublic = useAxiosPublic();
    const {type='', minAge=0, maxAge=0, division='', sortAge='', premium=false} = filter;

    const {data: biodatas=[], isPending: loading, refetch} = useQuery({
        queryKey: ['biodatas', type, minAge, maxAge, division, sortAge, limit, page],
        queryFn: async()=>{
            let query = '';
            if(type)query+=`&type=${type}`;
            if(minAge)query+=`&minAge=${minAge}`;
            if(maxAge)query+=`&maxAge=${maxAge}`;
            if(division)query+=`&division=${division}`;
            if(sortAge)query+=`&sortAge=${sortAge}`;
            if(premium)query+='&premium=true';
            if(limit)query+=`&limit=${limit}&page=${page}`;

            if(query)query = "?"+query.slice(1);
            const res = await axiosPublic(`/biodatas${query}`);
            return res.data;
        }
    })
    return {biodatas, loading, refetch}
};

useBiodatas.propTypes = {
    filter: PropTypes.object,
    limit: PropTypes.number,
    page: PropTypes.number
};

export default useBiodatas;