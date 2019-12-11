import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container
} from "reactstrap";
import { items } from "./CarouselArray";
import Imgix from "react-imgix";
const CarouselIntro = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
      >
        <Imgix
          className="img shadow-lg p-1 mb-5 bg-white rounded"
          width={1300}
          style={styleImg}
          height={700}
          src={item.src}
          alt={item.altText}
          imgixParams={{ ar: "1.6: 2.1", fit: "crop" }}
          htmlAttributes={{ media: "(min-width: 320px)" }}
        />

        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div style={marginTopStyle}>
      <Container id="Carsourel" className="rounded-lg mt-5">
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </Container>
    </div>
  );
};
const styleImg = {
  height: "79vh",
  width: "100vw"
};
const marginTopStyle = {
  marginTop: "14rem"
};
export default React.memo(CarouselIntro);
