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
import { useEffect, useState } from "react";
import Logo from "../../reusuable/Logo";

const Header = () => {
  const [top0, setTop0] = useState(true);

  useEffect(() => {
    let prev;
    window.onscroll = () => {
      setTop0(prev > window.scrollY);
      prev = window.scrollY;
    }
  }, []);

  return (<header
    className={(top0 ? 'top-0' : '-top-28') + " fixed left-0 w-full z-30 bg-clear-lite dark:bg-clear-dark px-2 py-3 border-b border-accent-deep transition-[top]"}
  >
    <Navbar fluid theme={themeOverride}>
      <Logo />

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
        <NavItem name="Home" />
        <NavItem to="/biodatas" name="Biodatas" />
        <NavItem to="/about" name="About Us" />
        <NavItem to="/contact" name="Contact Us" />
        <NavItem to="/login" name="Login" />
      </NavbarCollapse>
    </Navbar>
  </header>);
};

export default Header;