import React from "react";
import FadeInTitle from "../Animations/FadeInTitle";
const Header = ({ title, className }) => {
  return (
    <FadeInTitle>
      <div className="text-center ">
        <h1 style={styleFont} className="display-3 mb-0">
          {title}
        </h1>
      </div>
    </FadeInTitle>
  );
};
const styleFont = {
  fontFamily: "kalam,cursive",
  marginTop: "2rem"
};
export default React.memo(Header);
