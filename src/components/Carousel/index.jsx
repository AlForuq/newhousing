import React, { useRef } from "react";
import { CarouselAntd, Container, Icon } from "./style";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";

export const Carousel = () => {
  const contentStyle = {
    width: "100%",
  };

  const slider = useRef();

  return (
    <Container className="nocopy">
      <Icon
        className="icon"
        left={"left"}
        onClick={() => slider.current.prev()}
      />
      <Icon className="icon" onClick={() => slider.current.next()} />
      <CarouselAntd  ref={slider}>
        <div>
          <img src={img1} alt="" style={contentStyle} />
        </div>
        <div>
          <img src={img2} alt="" style={contentStyle} />
        </div>
        <div>
          <img src={img1} alt="" style={contentStyle} />
        </div>
        <div>
          <img src={img2} alt="" style={contentStyle} />
        </div>
      </CarouselAntd>
    </Container>
  );
};

export default Carousel;
