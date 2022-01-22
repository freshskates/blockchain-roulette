import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__inner-logo">
          <img src="images/logo.svg" alt="" />
        </div>
        <div className="header__inner-info">
          <div className="header__inner-amount">
            <img src="images/icons/solona.svg" alt="" />
            <span>2.40</span>
          </div>
          <a href="#" className="header__inner-wallet">
            <img src="images/icons/wallet.svg" alt="" />
            <span>Deposit</span>
          </a>
          <a href="#" className="header__inner-draw">
            Withdraw
          </a>
        </div>
        <div className="header__inner-account">
          <span>Hh2...35G</span>
          <img src="images/icons/chevron-bottom.svg" alt="" />
        </div>
      </div>
    </header>
  );
}
