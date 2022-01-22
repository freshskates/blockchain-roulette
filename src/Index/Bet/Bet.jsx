import React from "react";

export default function Bet() {
  return (
    <section className="bet">
      <div className="auto__container">
        <div className="bet__inner">
          <div className="bet__inner-header">
            <div className="bet__inner-header-set">
              <div className="bet__inner-header-set-amount">
                <img src="images/icons/solona.svg" alt="" />
                0.00
              </div>
              <div className="bet__inner-header-set-btns">
                <div className="bet__inner-header-set-btn">+0.1</div>
                <div className="bet__inner-header-set-btn">+0.5</div>
                <div className="bet__inner-header-set-btn">+1</div>
                <div className="bet__inner-header-set-btn">+5</div>
                <div className="bet__inner-header-set-btn">1/2</div>
                <div className="bet__inner-header-set-btn">2x</div>
                <div className="bet__inner-header-set-btn">Max</div>
              </div>
            </div>
            <div className="bet__inner-header-input">
              <button type="button" className="bet__inner-header-input-remove">
                <img src="images/icons/delete.svg" alt="" />
              </button>
              <input type="number" placeholder="0.00" />
            </div>
          </div>
          <div className="bet__inner-body">
            <button type="button" className="bet__inner-body-btn">
              Place Bet
            </button>
            <div className="bet__inner-body-info">
              <img src="images/icons/info.svg" alt="" />
              If the result is higher than your multiplier, your bet amount is multiplier by your
              guess.
            </div>
            <div className="bet__inner-body-repeat">
              Repeat Bets
              <div className="check">
                <input type="checkbox" />
                <label forhtml=""></label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
