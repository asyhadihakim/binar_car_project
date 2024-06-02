import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonialList } from "../utils/dummy";
export default function TestiSlick() {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="testimoni-container">
      <div className="testimoni">
        <Slider {...settings}>
          <div className="testimoni-cards-container">
            {testimonialList.map((data) => (
              <div className="testimoni-cards-items">
                <div className="testimoni-photo">
                  <img src={data.photo} alt="" />
                </div>
                <div className="testimoni-review">
                  <img src={data.rate} alt="" />
                  <p>"{data.review}"</p>
                  <p>
                    {data.name}, {data.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Slider>
      </div>
    </div>
  );
}
