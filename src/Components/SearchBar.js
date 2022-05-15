import React from "react";

const SearchBar = () => {
  return (
    <div>
      <form>
        <input
          type="text"
          className="search_type mobill010"
          placeholder="Search for Products"
        />
        <button type="submit" value="" className="search_submit"></button>
      </form>
    </div>
  );
};

export default SearchBar;
