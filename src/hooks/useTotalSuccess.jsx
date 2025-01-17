import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useTotalSuccess = () => {
    const axiosPublic = useAxiosPublic();
    const {data: totalStories=0, isPending:countingStories} = useQuery({
        queryKey: ['total-success-stories'],
        queryFn: async()=>{
            const res = await axiosPublic('/total-success-stories');
            return res.data.total;
        }
    });

    return {totalStories, countingStories}
};

export default useTotalSuccess;