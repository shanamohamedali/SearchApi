import React from "react";
import "./SearchList.css";

export function SearchList( {searchList} ) {
    console.log("....",searchList)
  return (
    <div className="search-list-container">
      {searchList.map((data) => (
        <div className="search-items" key={data.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
            alt=""
            width="60px"
            height="50px"
            style={{ objectFit: "contain" }}
          />
          <p className="title">{data.title}</p>
        </div>
      ))}
    </div>
  );
}
