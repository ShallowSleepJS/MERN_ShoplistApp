import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

class AppNavBar extends Component {
  state = {
    isOpen:false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }//toggle

  render(){
    return(
      <div>
        <Navbar color="dark" dark expend="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">Shopping List</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="http://google.com">GOOGLE IT</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );//return
  }//render

}//AppNavBar


export default AppNavBar;
