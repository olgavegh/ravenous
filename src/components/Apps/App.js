import React from "react";
import "./App.css";

import BuisnessList from "../BuisnessList/BuisnessList";
import SearchBar from "../SearchBar/SearchBar";

const App = () => {
  return (
    <div>
      <SearchBar />
      <BuisnessList />
    </div>
  );
};

export default App;
