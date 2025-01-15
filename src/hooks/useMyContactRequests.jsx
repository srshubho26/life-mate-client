import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosWithCredentials from "./useAxiosWithCredentials";

const useMyContactRequests = () => {
    const {email} = useAuth();
    const axiosWithCredentials = useAxiosWithCredentials();
    const {data: myContactReqs, isPending: loading} = useQuery({
        queryKey: ['my-contact-request-', email],
        queryFn: async()=>{
            const res = await axiosWithCredentials(`/contact-requests/${email}`);
            return res.data;
        }
    })
    return {myContactReqs, loading}
};

export default useMyContactRequests;