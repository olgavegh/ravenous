import React from "react";
import style from "./SearchBar.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = () => {
  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      return <li key={sortByOptions[sortByOption]}>{sortByOption}</li>;
    });
  };

  return (
    <div className={style.SearchBar}>
      <div className={style.SearchBarSortOptions}>
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className={style.SearchBarFields}>
        <label for="searchItem" className="hidden">
          Search Terms
        </label>
        <input type="text" name="searchItem" placeholder="Search Buisnesses" />
        <label for="searchPlace" className="hidden">
          Selected Location
        </label>
        <input type="text" name="searchPlace" placeholder="Where" />
      </div>
      <button className={style.SearchBarSubmit} type="submit">
        Let's Go
      </button>
    </div>
  );
};

export default SearchBar;
