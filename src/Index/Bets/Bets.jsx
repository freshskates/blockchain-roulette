import React from "react";
import BetsItem from "./BetsItem";
import { BetsModul } from "./BetsModul";

export default function Bets() {
  return (
    <section className="bets">
      <div className="auto__container">
        <div className="bets__inner">
          {BetsModul.map((BetsItems) => {
            return <BetsItem key={BetsItems.id} {...BetsItems} />;
          })}
        </div>
      </div>
    </section>
  );
}
