import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosWithCredentials from "./useAxiosWithCredentials";

const useIsAdmin = () => {
    const {email} = useAuth();
    const axiosWithCredentials = useAxiosWithCredentials();

    const {data: isAdmin, isPending:checking} = useQuery({
        queryKey: ['isAdmin', email],
        queryFn: async()=>{
            const res = await axiosWithCredentials(`/is-admin/${email}`);
            return res.data.isAdmin;
        }
    })
    return {isAdmin, checking}
};

export default useIsAdmin;