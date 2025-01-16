import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from './useAxiosPublic';

const useSuccessStories = () => {
    const axiosPublic = useAxiosPublic();
    const {data: stories, isPending:storiesLoading} = useQuery({
        queryKey: ['success-stories'],
        queryFn: async()=>{
            const res = await axiosPublic('/success-stories');
            return res.data;
        }
    });

    return {stories, storiesLoading}
};

export default useSuccessStories;