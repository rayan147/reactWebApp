import React, { Fragment } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../Assets/css";
import { Switch, Route, Redirect } from "react-router-dom";
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

const ParentComponent = props => {
  const guestLinks = <Fragment></Fragment>;
  const authLinks = <Fragment></Fragment>;
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Switch>
        <>
          <Route exact strict path="/" component={Intro} />
          <Route exact strict path="/" component={CarouselDisplay} />
          <Route exact strict path="/" component={Flavor} />
          <Route exact strict path="/" component={Soaks} />
          <Route exact strict path="/" component={Filling} />
          {/* <ProtectedRoutes exact strict path="/" component={Flavor} />
          <ProtectedRoutes exact strict path="/" component={Soaks} />
          <ProtectedRoutes exact strict path="/" component={Filling} /> */}

          <Route exact strict path="/about" component={About} />
          <Route exact strict path="/contact" component={ContactWithFormik} />
          <Route exact strict path="/gallery" component={GallaryDisplay} />
          <Route
            exact
            strict
            path="/quotes"
            component={ContactQuoteWithFormiks}
          />

          <Redirect from="*" to="/" />
        </>
      </Switch>

      <Footer />
    </>
  );
};

export default ParentComponent;
