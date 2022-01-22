import React from "react";
import Bet from "./Bet/Bet";
import Bets from "./Bets/Bets";
import Roll from "./Roll/Roll";

export default function Main() {
  return (
    <>
      <Roll />
      <Bet />
      <Bets />
    </>
  );
}
