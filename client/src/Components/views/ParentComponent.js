import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../Assets/css";

import { Switch, Route } from "react-router-dom";

import Navbar from "../Navbar";
import Intro from "../Intro";
import About from "../About";
import GallaryDisplay from "../Gallery/GallaryDisplay";

import Flavour from "../Flavours";
import Filling from "../Filling";
import Soaks from "../Soak";
import Footer from "../Footer";
import CarouselDisplay from "../Carousel";
import ContactQuoteWithFormiks from "../Contact/ContactQuoteWithFormiks";
import ContactWithFormik from "../Contact/ContactWithFormik";

const ParentComponent = () => {
  return (
    <>
      <div style={style}>
        <Navbar />
      </div>
      <Switch>
        <>
          {/* TODO* when wrong route enter it how display home page but it doesnt */}
          <Route exact path="/" component={Intro} />
          <Route exact path="/" component={CarouselDisplay} />
          <Route exact path="/" component={Flavour} />
          <Route exact path="/" component={Soaks} />
          <Route exact path="/" component={Filling} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={ContactWithFormik} />
          <Route exact path="/gallery" component={GallaryDisplay} />
          <Route exact path="/quotes" component={ContactQuoteWithFormiks} />
        </>
      </Switch>

      <Footer />
    </>
  );
};
const style = {
  marginBootom: "43rem"
};
export default ParentComponent;
