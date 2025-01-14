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
import { Link } from "react-router-dom";
import logo from '../../../assets/logo.png';
import NavItem from "./parts/NavItem";
  
const Header = () => {
    return (<header className="bg-lite dark:bg-background-dark px-2 py-3 border-b border-accent-deep"> 
    <Navbar fluid theme={themeOverride}>
    <Link style={{
    }} className="flex items-center text-xl sm:text-3xl font-bold font-playwrite bg-gradient-to-t from-primary to-accent-deep bg-clip-text text-transparent">
    <img className="w-10 sm:w-16" src={logo} alt="Logo" />
    <span className="">Life</span>
    <span className="">Mate</span>
    </Link>

      <div className="flex lg:order-2">
      <NavbarToggle />
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <DropdownHeader>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </DropdownHeader>
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
      </div>
      <NavbarCollapse className="text-text dark:text-text-dark">
        <NavItem name="Home"/>
        <NavItem to="/biodatas" name="Biodatas"/>
        <NavItem to="/about" name="About Us"/>
        <NavItem to="/contact" name="Contact Us"/>
        <NavItem to="/login" name="Login"/>
      </NavbarCollapse>
    </Navbar>
    </header>);
};

export default Header;