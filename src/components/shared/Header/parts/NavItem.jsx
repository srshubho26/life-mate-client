import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavItem = ({ name, to = '/' }) => {
    return (<NavLink
        to={to}
        className={({ isActive }) => `${isActive ? 'font-bold text-accent-deep' : ''} text-lg hover:text-accent-deep uppercase`}
    >
        {name}
    </NavLink>);
};

NavItem.propTypes = {
    name: PropTypes.string,
    to: PropTypes.string
};

export default NavItem;