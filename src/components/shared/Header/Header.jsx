import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import themeOverride from "./parts/theme";
import NavItem from "./parts/NavItem";
import { useContext, useEffect, useState } from "react";
import Logo from "../../reusuable/Logo";
import useAuth from "../../../hooks/useAuth";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useIsAdmin from "../../../hooks/useIsAdmin";
import ThemeToggler from "./parts/ThemeToggler";
import PropTypes from 'prop-types';

const Header = ({drawerToggler=null}) => {
  const [top0, setTop0] = useState(true);
  const user = useAuth();
  const { isAdmin, adminChecking } = useIsAdmin();
  const { logOut, setDark } = useContext(AuthContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleLogout = () => {
    logOut()
      .then(() => navigate('/login'))
  }

  useEffect(() => {
    let prev = 0;
    const scrollInit = () => {
      setTop0(prev >= window.scrollY);
      prev = window.scrollY;
    }
    window.addEventListener('scroll', scrollInit);

    return () => window.removeEventListener('scroll', scrollInit);
  }, []);

  return (<header
    className={(top0 ? 'top-0' : '-top-64') + " fixed left-0 w-full z-30 bg-clear-lite dark:bg-clear-dark px-2 py-3 drop-shadow-md transition-all"}
  >
    <Navbar fluid theme={themeOverride}>
      <div className="flex gap-3 items-center">
        <Logo />
        {drawerToggler}
        <ThemeToggler setDark={setDark} />
      </div>

      <div className={"flex lg:order-2 " + (user ? '' : 'lg:hidden')}>
        {!pathname.includes('/dashboard') && <NavbarToggle />}

        {user && <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" className="border-primary border rounded-full" img={user.photoURL} rounded />
          }
        >
          <DropdownHeader>
            <span className="block text-sm min-w-40">{user.displayName}</span>
            <span className="block truncate text-sm font-medium">{user.email}</span>
          </DropdownHeader>

          <DropdownDivider />
          <DropdownItem onClick={handleLogout} className="text-accent-dark font-semibold">Sign out</DropdownItem>
        </Dropdown>}
      </div>

      {!pathname.includes('/dashboard') && <NavbarCollapse className="text-text dark:text-text-dark">
        <NavItem name="Home" />
        <NavItem to="/biodatas" name="Biodatas" />
        <NavItem to="/about" name="About Us" />
        <NavItem to="/stories" name="Success Stories" />
        <NavItem to="/contact" name="Contact Us" />
        {user ? <NavItem name="Dashboard" to={!adminChecking && isAdmin ? "/dashboard/admin-dashboard" : "/dashboard/user-dashboard"} /> :
          <NavItem to="/login" name="Login" />}
      </NavbarCollapse>}

    </Navbar>
  </header>);
};

Header.propTypes = {
  drawerToggler: PropTypes.object
}

export default Header;