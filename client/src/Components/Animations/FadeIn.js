import { animated, useSpring, config } from "react-spring";
import React from "react";

const FadeIn = ({ children }) => {
  const mainContentFadeIn = useSpring({
    delay: 800,
    from: { opacity: 0, marginTop: "-400" },
    to: [{ opacity: 1, marginTop: 0 }],
    config: config.default
  });
  return (
    <>
      <animated.div style={mainContentFadeIn}>{children}</animated.div>
    </>
  );
};

export default FadeIn;
