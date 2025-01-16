// import Loading from '../../../components/reusuable/Loading';
import { Helmet } from 'react-helmet-async';
import Title from '../../../components/reusuable/Title';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxiosWithCredentials from '../../../hooks/useAxiosWithCredentials';
import Chart from './parts/Chart';

const AdminDashboard = () => {
    const {email} = useAuth();
    const axiosWithCredentials = useAxiosWithCredentials();
    const {data: stats={}, isPending:loading} = useQuery({
        queryKey: ['admin-stats-', email],
        queryFn: async()=>{
            const res = await axiosWithCredentials('/admin-stats');
return res.data;
        }
    })
console.log(stats)
    return (<section className="relative min-h-screen">
            {/* <Loading loading={loading || deleteLoading} /> */}
            <Helmet>
                <title>Dashboard || Love Mate</title>
            </Helmet>
    
            <Title title="Welcome" />

            <Chart stat={stats}/>
        </section>
    );
};

export default AdminDashboard;