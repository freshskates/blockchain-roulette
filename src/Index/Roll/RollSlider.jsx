import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";

export default function RollSlider() {
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  useEffect(() => {
    // nav1: this.slider1,
    // nav2: this.slider2,
    if (slider1.current !== null && slider2.current !== null) {
      setNav1(slider1.current);
      setNav2(slider2.current);
    }
  }, [slider1, slider2]);
  return (
    <>
      <div className="sliderNav">
        <div className="sliderNav__text">Previous Rolls</div>
        <div className="sliderNav__nav">
          <Slider
            asNavFor={nav2}
            ref={slider1}
            dots={false}
            arrows={false}
            slidesToScroll={4}
            speed={300}
            centerMode={false}
            variableWidth={true}
            responsive={[
              {
                breakpoint: 840,
                settings: {
                  slidesToScroll: 3,
                },
              },
              {
                breakpoint: 650,
                settings: {
                  slidesToScroll: 2,
                },
              },
              {
                breakpoint: 400,
                settings: {
                  slidesToScroll: 1,
                },
              },
            ]}
          >
            <div className="sliderNav__nav-item">1.50x</div>
            <div className="sliderNav__nav-item active">1.50x</div>
            <div className="sliderNav__nav-item">1.50x</div>
            <div className="sliderNav__nav-item active">1.50x</div>
            <div className="sliderNav__nav-item">1.50x</div>
            <div className="sliderNav__nav-item pend">2,576.50x</div>
            <div className="sliderNav__nav-item pend">3,876.44x</div>
            <div className="sliderNav__nav-item active">33.50x</div>
            <div className="sliderNav__nav-item">1.50x</div>
            <div className="sliderNav__nav-item">1.50x</div>
            <div className="sliderNav__nav-item">1.50x</div>
            <div className="sliderNav__nav-item pend">2,576.50x</div>
            <div className="sliderNav__nav-item pend">3,876.44x</div>
          </Slider>
        </div>
      </div>
      <div className="sliderMain">
        <div className="sliderMain__line">
          <img src="images/icons/line.svg" alt="" />
        </div>
        <Slider
          asNavFor={nav1}
          ref={slider2}
          slidesToShow={4}
          slidesToScroll={4}
          arrows={false}
          centerMode={false}
          variableWidth={false}
          dots={false}
          responsive={[
            {
              breakpoint: 840,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
            {
              breakpoint: 650,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]}
        >
          <div className="sliderMain__item active">
            <div className="sliderMain__item-number">5.00x</div>
            <div className="sliderMain__item-price">
              <img src="images/icons/solona.svg" alt="" />
              <span>2.40</span>
            </div>
          </div>
          <div className="sliderMain__item pend">
            <div className="sliderMain__item-number">5.00x</div>
            <div className="sliderMain__item-price">
              <img src="images/icons/solona.svg" alt="" />
              <span>2.40</span>
            </div>
          </div>
          <div className="sliderMain__item">
            <div className="sliderMain__item-number">5.00x</div>
          </div>
          <div className="sliderMain__item">
            <div className="sliderMain__item-number pend">5.00x</div>
          </div>
          <div className="sliderMain__item">
            <div className="sliderMain__item-number">5.00x</div>
          </div>
          <div className="sliderMain__item">
            <div className="sliderMain__item-number">5.00x</div>
          </div>
          <div className="sliderMain__item">
            <div className="sliderMain__item-number">5.00x</div>
          </div>
          <div className="sliderMain__item active">
            <div className="sliderMain__item-number ">5.00x</div>
            <div className="sliderMain__item-price">
              <img src="images/icons/solona.svg" alt="" />
              <span>5,463.00x</span>
            </div>
          </div>
          <div className="sliderMain__item">
            <div className="sliderMain__item-number">5.00x</div>
          </div>
          <div className="sliderMain__item">
            <div className="sliderMain__item-number">5.00x</div>
          </div>
          <div className="sliderMain__item pend">
            <div className="sliderMain__item-number ">5,463.00x</div>
            <div className="sliderMain__item-price">
              <img src="images/icons/solona.svg" alt="" />
              <span>2.40</span>
            </div>
          </div>
          <div className="sliderMain__item">
            <div className="sliderMain__item-number">5.00x</div>
          </div>
          <div className="sliderMain__item">
            <div className="sliderMain__item-number">5.00x</div>
          </div>
        </Slider>
      </div>
    </>
  );
}
