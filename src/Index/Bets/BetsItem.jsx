import React from "react";

export default function BetsItem(props) {
  return (
    <div className="bets__inner-item">
      <div className="bets__inner-item-info">
        Bet
        <span>
          <img src="images/icons/solona.svg" alt="solana" />
          {props.bett}
        </span>
      </div>
      <div className="bets__inner-item-row">
        <div className="bets__inner-item-more">
          Multi <span> {props.multi}</span>
        </div>
        <div className="bets__inner-item-more">
          Chance <span> {props.chance}</span>
        </div>
      </div>
      <div className="range">
        <div className="range__value" style={{ width: props.progress }}>
          <img src="images/range.svg" alt="range" />
        </div>
      </div>
      <div className="bets__inner-item-payout">
        Payout
        <span>
          <img src="images/icons/solona.svg" alt="solana" />
          {props.payout}
        </span>
      </div>
    </div>
  );
}
