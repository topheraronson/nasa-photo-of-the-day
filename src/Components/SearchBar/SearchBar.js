import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

export default function SearchAppBar() {
  
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Nasa Photo of the Day</NavbarBrand>
        </Navbar>
      </div>
    );
}