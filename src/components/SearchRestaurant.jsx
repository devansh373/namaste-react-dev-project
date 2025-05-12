import React, { useContext, useEffect, useState } from "react";
import FetchRestaurantsContext from "../context/fetchRestaurantsContext";
import SearchedRestaurantsContext from "../context/searchedRestaurants";

function SearchRestaurant() {
  const {searchedRestaurants,setSearchedRestaurants,inputValue,setInputValue} = useContext(SearchedRestaurantsContext)
  const { restaurants } = useContext(FetchRestaurantsContext);
  useEffect(() => {
    const filteredRestaurants = restaurants.filter((restaurant)=>restaurant.info.name.toLowerCase().includes(inputValue.toLowerCase()))
        setSearchedRestaurants(inputValue?filteredRestaurants:restaurants)
        console.log(inputValue,filteredRestaurants)
  
    return () => {
      
    }
  }, [inputValue])
  
  return (
    <input
      type="text"
      name="search-restaurant"
      id="search-restaurant"
      className=" border border-red-500 rounded-[6] text-xl text-gray-500 p-2 w-[500] ml-[5%]"
      placeholder="Search..."
      value={inputValue}
      onChange={(e)=>{
        console.log(e.target.value)
        setInputValue(e.target.value)
      }}
    />
  );
}

export default SearchRestaurant;
