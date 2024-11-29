import React from "react";
import "./SearchInput.css";

export function SearchInput({ onChange, searchInput, clearSearch }) {
  return (
    <div className="search-input-container">
      <input type="text"
       placeholder="Search here..." 
       onChange={onChange} 
       value={searchInput}/>
      {searchInput && <button onClick={clearSearch}>
        <img
          src="https://logowik.com/content/uploads/images/close1437.jpg"
          alt="close-icon"
          width="28px"
          height="28px"
          style={{ objectFit: "contain" }}
        />
      </button>}
    </div>
  );
}
