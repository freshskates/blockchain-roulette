import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="auto__container">
        <div className="footer__inner">
          <div className="footer__inner-side">
            <div className="footer__inner-fair">
              <img src="images/icons/safe.svg" alt="" />
              100% Fair
            </div>
            <a href="#" className="footer__inner-verify">
              Verify Fairness
            </a>
          </div>
          <a href="#" className="footer__inner-how">
            How it works
          </a>
        </div>
      </div>
    </footer>
  );
}
