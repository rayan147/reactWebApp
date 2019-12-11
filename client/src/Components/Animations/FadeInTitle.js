import React from "react";
import { useSpring, animated, config } from "react-spring";
const FadeInTitle = ({ children }) => {
  const props = useSpring({
    delay: 500,
    to: [{ opacity: 1 }],
    from: { opacity: 0 },
    entered: {},
    config: config.default
  });
  return (
    <>
      <animated.div style={props}>{children} </animated.div>
    </>
  );
};
export default React.memo(FadeInTitle);
