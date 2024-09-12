import React from "react";
import style from "./BuisnessList.module.css";

import Buisness from "../Buisness/Buisness";

const BuisnessList = () => {
  return (
    <div className={style.BuisnessList}>
      <Buisness />
      <Buisness />
      <Buisness />
      <Buisness />
      <Buisness />
      <Buisness />
    </div>
  );
};

export default BuisnessList;
