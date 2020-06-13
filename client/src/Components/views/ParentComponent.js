import React, { useState, useEffect } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../Assets/css";
import {
  Switch,
  Route,
  Redirect,
  withRouter,
  BrowserRouter as Router,
} from "react-router-dom";

import ProtectedRoutes from "../Auth/ProtectedRoutes";
import Navbar from "../Navbar";
import Intro from "../Intro";
import About from "../About";
import GallaryDisplay from "../Gallery/GallaryDisplay";

import Flavor from "../Flavor/Flavor";
import Filling from "../Filling";
import Soaks from "../Soak";
import Footer from "../Footer";
import CarouselDisplay from "../Carousel";
import ContactQuoteWithFormiks from "../Contact/ContactQuoteWithFormiks";
import ContactWithFormik from "../Contact/ContactWithFormik";
import LoginModal from "../Auth/LoginModal";
import Register from "../Auth/RegisterModel";
import ForgotPassword from "../Auth/ForgotPassword";
import ForgotPasswordVerification from "../Auth/ForgotPasswordVerification";
import ChangePassword from "../Auth/ChangePassword";
import ChangePasswordConfirm from "../Auth/ChangePasswordConfirm";

import { Auth } from "aws-amplify";

const ParentComponent = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [user, setUser] = useState(null);

  const setAuthStatus = (authenticated) => setIsAuthenticated(authenticated);
  const setUserFunc = (user) => setUser(user);

  useEffect(() => {
    try {
      (async () => {
        const session = await Auth.currentSession();
        setAuthStatus(true);
        const user = await Auth.currentAuthenticatedUser();
        setUserFunc(user);
      })();
    } catch (error) {
      console.error(error.message);
    }
    setIsAuthenticated(false);
  }, []);
  const authProps = {
    isAuthenticated,
    user,
    setAuthStatus,
    setUserFunc,
  };
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar {...props} auth={authProps} />
          <Switch>
            <Route
              exact
              strict
              path="/"
              render={(props) => <Intro {...props} auth={authProps} />}
            />
            <Route
              exact
              strict
              path="/login"
              render={(props) => <LoginModal {...props} auth={authProps} />}
            />
            <Route
              exact
              strict
              path="/register"
              render={(props) => <Register {...props} auth={authProps} />}
            />
            <Route
              exact
              strict
              path="/"
              render={(props) => (
                <CarouselDisplay {...props} auth={authProps} />
              )}
            />
            <Route
              exact
              strict
              path="/"
              render={(props) => <Flavor {...props} auth={authProps} />}
            />
            <Route
              exact
              strict
              path="/"
              render={(props) => <Soaks {...props} auth={authProps} />}
            />
            <Route
              exact
              strict
              path="/"
              render={(props) => <Filling {...props} auth={authProps} />}
            />

            <Route
              exact
              strict
              path="/about"
              render={(props) => <About {...props} auth={authProps} />}
            />
            <Route
              exact
              strict
              path="/contact"
              render={(props) => (
                <ContactWithFormik {...props} auth={authProps} />
              )}
            />
            <Route
              exact
              strict
              path="/gallery"
              render={(props) => <GallaryDisplay {...props} auth={authProps} />}
            />
            <Route
              exact
              strict
              path="/quotes"
              render={(props) => (
                <ContactQuoteWithFormiks {...props} auth={authProps} />
              )}
            />
            <Route
              exact
              path="/forgotpassword"
              render={(props) => <ForgotPassword {...props} auth={authProps} />}
            />
            <Route
              exact
              path="/forgotpasswordverification"
              render={(props) => (
                <ForgotPasswordVerification {...props} auth={authProps} />
              )}
            />
            <Route
              exact
              path="/changepassword"
              render={(props) => <ChangePassword {...props} auth={authProps} />}
            />
            <Route
              exact
              path="/changepasswordconfirmation"
              render={(props) => (
                <ChangePasswordConfirm {...props} auth={authProps} />
              )}
            />

            <Redirect from="*" to="/" />
          </Switch>

          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default ParentComponent;
