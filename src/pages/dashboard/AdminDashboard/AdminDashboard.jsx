// import Loading from '../../../components/reusuable/Loading';
import { Helmet } from 'react-helmet-async';
import Title from '../../../components/reusuable/Title';

const AdminDashboard = () => {
    return (<section className="relative min-h-screen">
            {/* <Loading loading={loading || deleteLoading} /> */}
            <Helmet>
                <title>Dashboard || Love Mate</title>
            </Helmet>
    
            <Title title="Welcome" />
        </section>
    );
};

export default AdminDashboard;