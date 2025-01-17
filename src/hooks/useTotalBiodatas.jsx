import PropTypes from 'prop-types';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useTotalBiodatas = (filter) => {
    const axiosPublic = useAxiosPublic();
    const {type='', minAge=0, maxAge=0, division='', premium=false, id=''} = filter;
    const {data: total=0, isPending:totalLoading} = useQuery({
        queryKey: ['total-biodatas', type, minAge, maxAge, division, id],
        queryFn: async()=>{
            let query = '';
            if(type)query+=`&type=${type}`;
            if(minAge)query+=`&minAge=${minAge}`;
            if(maxAge)query+=`&maxAge=${maxAge}`;
            if(division)query+=`&division=${division}`;
            if(premium)query+='&premium=true';
            if(id)query+=`&exclude=${id}`

            if(query)query = "?"+query.slice(1);

            const res = await axiosPublic(`/total-biodatas${query}`);
            return res.data?.total;
        }
    })

    return {total, totalLoading}
};

useTotalBiodatas.propTypes = {
    filter: PropTypes.object
};

export default useTotalBiodatas;