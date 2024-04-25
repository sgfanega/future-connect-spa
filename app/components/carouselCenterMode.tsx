"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarouselCenterMode() {
  
  const articleStyle = {
    aspectRatio: "1 / 1"
  } as React.CSSProperties;

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 3000
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <article className="bg-primary rounded-3 text-center py-5" style={articleStyle}>
          </article>
        </div>
        <div>
          <article className="bg-primary rounded-3 text-center py-5" style={articleStyle}>
          </article>
        </div>
        <div>
          <article className="bg-primary rounded-3 text-center py-5" style={articleStyle}>
          </article>
        </div>
        <div>
          <article className="bg-primary rounded-3 text-center py-5" style={articleStyle}>
          </article>
        </div>
      </Slider>
    </div>
  );
}
