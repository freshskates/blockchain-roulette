import React from "react";
import RollSlider from "./RollSlider";

export default function Roll() {
  return (
    <section className="roll">
      <div className="auto__container">
        <div className="roll__inner">
          <div className="roll__inner-rolling">
            <div className="roll__inner-rolling-number">
              Rolling in <span>12</span>
            </div>
            <div className="range">
              <div className="range__value" style={{ width: "40%" }}>
                <img src="images/range.svg" alt="" />
              </div>
            </div>
          </div>
          <RollSlider />
        </div>
      </div>
    </section>
  );
}
