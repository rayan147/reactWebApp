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
            <h3 id="navbar-brand" className="mb-0 ">
              Adriana G. Noto
            </h3>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto " navbar>
              <Navbarlink
                href="/about"
                className="about"
                name="About"
              ></Navbarlink>
              <Navbarlink
                href="/contact"
                className="contact"
                name="Contact"
              ></Navbarlink>

              <Navbarlink
                href="/quotes"
                className="quotes"
                name="Quote"
              ></Navbarlink>

              <Navbarlink
                href="/gallery"
                className="gallery"
                name="Gallery"
              ></Navbarlink>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default React.memo(PortfolioNavbarComponent);
