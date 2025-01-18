import Loading from '../../../components/reusuable/Loading';
import { Helmet } from 'react-helmet-async';
import Title from '../../../components/reusuable/Title';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxiosWithCredentials from '../../../hooks/useAxiosWithCredentials';
import Chart from './parts/Chart';
import { BsArrow90DegLeft } from 'react-icons/bs';

const AdminDashboard = () => {
    const { email, displayName } = useAuth();
    const axiosWithCredentials = useAxiosWithCredentials();
    const { data: stats = {}, isPending: loading } = useQuery({
        queryKey: ['admin-stats-', email],
        queryFn: async () => {
            const res = await axiosWithCredentials('/admin-stats');
            return res.data;
        }
    })

    return (<section>
        <Loading loading={loading} />
        <Helmet>
            <title>Admin Dashboard || Love Mate</title>
        </Helmet>

        <Title title={`Welcome ${displayName} (Admin)`} />
        <p className='text-center flex-wrap text-lg text-text my-3 flex items-center gap-2 justify-center'>
            Click the <span className='inline-flex items-center gap-2 text-primary font-semibold'>
                <BsArrow90DegLeft className='text-2xl' />
                Top-Left
            </span> icon for available options
        </p>

        <Chart stat={stats} />
    </section>);
};

export default AdminDashboard;