import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from './useAxiosPublic';
import useTotalSuccess from "./useTotalSuccess";

const useSuccessStories = (limit, page=1) => {
    const axiosPublic = useAxiosPublic();
    const {totalStories, countingStories} = useTotalSuccess();
    const {data: stories, isPending:storiesLoading} = useQuery({
        queryKey: ['success-stories-', limit, page],
        queryFn: async()=>{
            const res = await axiosPublic(`/success-stories?limit=${limit}&page=${page-1}`);
            return res.data;
        }
    });

    return {stories, storiesLoading: storiesLoading || countingStories, totalStories}
};

export default useSuccessStories;