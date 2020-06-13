import React from "react";
import "../../Assets/css/Navbar.css";
import PortfolioNavbar from "./PortfolioNavbarComponent ";

const Navbar = ({ auth }) => {
  return (
    <div className="Navbar mb-5">
      <PortfolioNavbar auth={auth} />
    </div>
  );
};
export default React.memo(Navbar);
