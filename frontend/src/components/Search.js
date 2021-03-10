import React from "react";

function Search({onSearchChange, searchTerm}) {
  return (
    <div className="filter">
      <input id="search-bar" type="text" placeholder="Search Notes..." value={searchTerm} onChange={onSearchChange}/>
    </div>
  );
}

export default Search;
