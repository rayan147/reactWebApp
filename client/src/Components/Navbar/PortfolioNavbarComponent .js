import React, { Component } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap";
import "../../Assets/css/Navbar.css";
// import "../../Assets/css/PortfolioNavbar.css";
import Navbarlink from "./Navbarlink";

class PortfolioNavbarComponent extends Component {
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
  render() {
    return (
      <div className="Navbarlink">
        <Navbar light expand="md">
          <NavbarBrand className="mr-auto mb-4px" href="/">
            <h3 id="navbar-brand" className="mb-3 ">
              Adriana G. Noto
            </h3>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto " navbar>
              <Navbarlink to="about" className="" name="About"></Navbarlink>
              <Navbarlink to="contact" className="" name="Contact"></Navbarlink>

              <Navbarlink to="quotes" className="" name="Quote"></Navbarlink>

              <Navbarlink to="gallery" className="" name="Gallery"></Navbarlink>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default React.memo(PortfolioNavbarComponent);
