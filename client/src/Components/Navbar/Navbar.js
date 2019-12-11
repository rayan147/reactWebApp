import React from "react";
import "../../Assets/css/Navbar.css";
import PortfolioNavbar from "./PortfolioNavbarComponent ";
const Navbar = () => {
  return (
    <div className="Navbar mb-5">
      <PortfolioNavbar />
    </div>
  );
};
export default React.memo(Navbar);
