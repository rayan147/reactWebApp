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
import "../../Assets/css/Carousel.css";
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
          className="Carousel--wrapper img shadow-lg p-1 mb-5 bg-white rounded m-auto "
          width={350}
          sizes="calc(10% - 10px)"
          height={650}
          src={item.src}
          alt={item.altText}
          imgixParams={{ ar: "2: 2", fit: "crop" }}
          htmlAttributes={{ media: "(min-width: 420px)" }}
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

const marginTopStyle = {
  marginTop: "14rem"
};
export default React.memo(CarouselIntro);
