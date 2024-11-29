import React, { useEffect, useState } from "react";
import { SearchInput } from "./SearchInput/SearchInput";
import { SearchList } from "./SearchList/SearchList";
import axios from "axios";
import "./Search.css";

const API_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=d3449ff6ec0c027623bf6b6f5fff78b3&language=en-US&page=1&include_adult=false";
//search using local ApI Filtering

export function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [searchList, setSearchList] = useState([]);

  const handleChange = (event) => {
    setSearchInput(event.target.value);
    // fetchMovieList(event.target.value)
  };
  console.log(searchInput);

  const clearSearch = () => {
    setSearchInput("");
    searchList([]);
  };
  const fetchMovieList = async () => {
    try {
      const response = await axios(API_URL, {
        params: {
          //   query: query,
          query: searchInput,
        },
      });
      setSearchList(response.data.results);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const timeout=setTimeout(()=>{
        if(searchInput){
            fetchMovieList();
        }
    },300)
    return ()=>{
        clearTimeout(timeout); 
    }
       
  },[searchInput]);
  console.log("....", searchList);

  return (
    <div className="search-container">
      <div className="search-heading">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3917/3917132.png"
          alt="search-icon"
          width="30px"
          height="30px"
        />
        <p>Looking for a movie?</p>
      </div>
      <SearchInput
        onChange={handleChange}
        searchInput={searchInput}
        clearSearch={clearSearch}
      />
      {searchInput.length > 0 && <SearchList searchList={searchList} />}
    </div>
  );
}
