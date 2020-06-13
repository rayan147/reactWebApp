import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import "../../Assets/css/Navbar.css";
// import "../../Assets/css/PortfolioNavbar.css";
import Navbarlink from "./Navbarlink";
import RegisterModal from "../Auth/RegisterModel";
import LoginModal from "../Auth/LoginModal";
import Logout from "../Auth/Logout";
import { Auth } from "aws-amplify";
class PortfolioNavbarComponent extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  handleLogOut = async (event) => {
    event.preventDefault();
    Auth.signOut();
    this.props.auth.setUserFunc(null);
    this.props.auth.setAuthStatus(false);
    try {
    } catch (error) {
      console.error(error.message);
    }
  };

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

              <Navbarlink to="quotes" className="" name="Quote">
                {" "}
              </Navbarlink>
              <Navbarlink to="gallery" className="" name="Gallery"></Navbarlink>
              {this.props.auth.isAuthenticated && this.props.auth.user && (
                <Navbarlink name={`Welcome ${this.props.auth.user.username}`}>
                  {" "}
                </Navbarlink>
              )}
              {!this.props.auth.isAuthenticated && (
                <>
                  <Navbarlink to="register" className="" name="Register">
                    {" "}
                  </Navbarlink>
                  <Navbarlink to="login" className="" name="login"></Navbarlink>
                </>
              )}
              {this.props.auth.isAuthenticated && (
                <Navbarlink
                  to="logout"
                  onClick={this.handleLogOut}
                  className=""
                  name="Logout"
                ></Navbarlink>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default PortfolioNavbarComponent;
