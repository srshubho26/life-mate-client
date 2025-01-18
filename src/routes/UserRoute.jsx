import PropTypes from 'prop-types';
import useIsAdmin from '../hooks/useIsAdmin';
import Loading from '../components/reusuable/Loading';
import { Navigate } from 'react-router-dom';

const UserRoute = ({ children }) => {
    const { isAdmin, adminChecking } = useIsAdmin();

    if (adminChecking) return <Loading loading={adminChecking} />
    if (isAdmin) return <Navigate to="/" />
    return children;
};

UserRoute.propTypes = {
    children: PropTypes.object
};

export default UserRoute;