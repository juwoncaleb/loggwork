import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default class Resizable extends Component {
 
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,

    };
    return (
      <div>


        <div
         className="jobCarousel"
        >
          <Slider {...settings}>
            <div>
              <img src="../l1.png" />
            </div>
            <div>
              <img src="../l2.png" />
            </div>
            <div>
              <img src="../l3.png" />
            </div>
            <div>
              <img src="../l4.png" />
            </div>
            <div>
              <img src="../l2.png" />
            </div>
            <div>
              <img src="../l3.png" />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}