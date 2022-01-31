import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import scroll01 from "../assets/images/scroll_001.png";
import scroll02 from "../assets/images/scroll_002.png";
import scroll03 from "../assets/images/scroll_003.png";
import scroll04 from "../assets/images/scroll_004.png";
export default function Feature() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div>
          <img src={scroll01} alt="" />
        </div>
        <div>
          <img src={scroll02} alt="" />
        </div>
        <div>
          <img src={scroll03} alt="" />
        </div>
        <div>
          <img src={scroll04} alt="" />
        </div>
      </Carousel>
    </div>
  );
}
