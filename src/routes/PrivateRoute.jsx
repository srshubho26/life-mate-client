import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const user = useAuth();
    const { pathname } = useLocation();

    if (!user) return <Navigate to="/login" state={pathname} />
    return <>{children}</>
};

PrivateRoute.propTypes = {
    children: PropTypes.object
};

export default PrivateRoute;