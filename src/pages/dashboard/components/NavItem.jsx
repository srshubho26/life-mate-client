import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';

const NavItem = ({ closeDrawer, name, icon, to = "" }) => {
    const {pathname} = useLocation();
    const isActive = pathname.includes(to);
    return (<li className={(isActive ? 'text-primary' : '') + " my-3 hover:text-primary"}>
        <NavLink onClick={closeDrawer} to={`/dashboard/${to}`} className='flex items-center gap-2 text-2xl'>
            {icon}
            <span className='text-base'>{name}</span>
        </NavLink>
    </li>);
};

NavItem.propTypes = {
    name: PropTypes.string,
    icon: PropTypes.object,
    to: PropTypes.string,
    closeDrawer: PropTypes.func
};

export default NavItem;