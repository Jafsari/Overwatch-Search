import React, { Component } from 'react';
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
  DropdownItem } from 'reactstrap';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  handleGrandMasters = (e) => {
    e.preventDefault();
    this.props.history.push('/grandmasters')
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand  tag={Link}
                to="/search">Search
          </NavbarBrand>
          <NavbarBrand  tag={Link}
                to="/invite">Invite
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link}
                to="/general">General Chat</NavLink>
              </NavItem>
              <NavItem>
              <NavLink tag={Link}
                to="/competitive">Competitive</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem  tag={Link}
                to="/grandmaster">
                    GrandMasters
                  </DropdownItem>
                  <DropdownItem
                  tag={Link}
                  to="/master">
                    Masters
                  </DropdownItem>
                  <DropdownItem/>
                  <DropdownItem
                  tag={Link}
                  to="/diamond">
                    Diamond
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem
                  tag={Link}
                  to="/dashboard">
                    Home
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}