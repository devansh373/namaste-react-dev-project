import React, { useContext, useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { SWIGGY_API_URL } from "../constants";
import fetchRestaurantsContext from "../context/fetchRestaurantsContext";
import FetchRestaurantsContext from "../context/fetchRestaurantsContext";
import Shimmer from "./Shimmer";
import SearchedRestaurantsContext from "../context/searchedRestaurants";

function Body() {
  // const burgerKing = {
  //   name: "Burger King",
  //   img: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1661383215/nd7il0qt6kjphdcu7hf7.jpg",
  //   cuisines: ["Burgers", "American"],
  //   ratings: "4.2",
  // };

  // useEffect(() => {
  //   restaurants = useContext(FetchRestaurantsContext);
  // }, [restaurants]);
  const { restaurants } = useContext(FetchRestaurantsContext);
  const { searchedRestaurants, inputValue } = useContext(
    SearchedRestaurantsContext
  );
  useEffect(() => {
    // console.log()
    console.log(restaurants);
  }, [restaurants]);
  console.log(inputValue);
  useEffect(() => {
    // getRestaurants();
    fetch(SWIGGY_API_URL)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  }, []);
  if (inputValue && searchedRestaurants.length >= 0) {
    return (
      <div className="flex flex-wrap gap-[20] items-center justify-center">
        {searchedRestaurants?.length > 0 ? (
          searchedRestaurants.map((restaurant) => (
            <RestaurantCard data={restaurant} key={restaurant?.info?.id} />
          ))
        ) : (
          <h1>No results found</h1>
        )}
      </div>
    );
  }
  return (
    <div className="flex flex-wrap gap-[20] items-center justify-center">
      {restaurants?.length > 0 ? (
        restaurants.map((restaurant) => (
          <RestaurantCard data={restaurant} key={restaurant?.info?.id} />
        ))
      ) : (
        <Shimmer />
      )}
    </div>
  );
}

export default Body;
