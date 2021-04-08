import React from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from 'reactstrap';

const NavButtons = () => {

    return (
   <div className="NavButtons">
       <Navbar color="light" light expand="md">
        
    
          <Nav className="mr-auto" navbar>
          <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Display
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Thumbs
                </DropdownItem>
                <DropdownItem>
                  List
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Sort
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Newest
                </DropdownItem>
                <DropdownItem>
                  Oldest
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/components/">Favorites</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Add File</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Delete All</NavLink>
            </NavItem>
          </Nav>
       
      </Navbar>
   </div>
    );
  }
  
  export default NavButtons;
  



