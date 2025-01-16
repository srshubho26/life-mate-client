import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosWithCredentials from "./useAxiosWithCredentials";

const useIsAdmin = () => {
    const {email} = useAuth();
    const axiosWithCredentials = useAxiosWithCredentials();

    const {data: isAdmin, isPending:adminChecking} = useQuery({
        queryKey: ['isAdmin', email],
        queryFn: async()=>{
            const res = await axiosWithCredentials(`/is-admin/${email}`);
            return res.data.isAdmin;
        }
    })
    return {isAdmin, adminChecking}
};

export default useIsAdmin;