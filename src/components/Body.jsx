import React, { useContext, useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { SWIGGY_API_URL } from "../constants";
import fetchRestaurantsContext from "../context/fetchRestaurantsContext";
import FetchRestaurantsContext from "../context/fetchRestaurantsContext";

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
  const {restaurants} = useContext(FetchRestaurantsContext);
  useEffect(() => {
      // console.log()
      console.log(restaurants);
      
    }, [restaurants]);
  
  

  return restaurants?.length > 0 ? (
    <div className="flex flex-wrap gap-[20] items-center justify-center">
      {restaurants.map((restaurant) => (
        <RestaurantCard data={restaurant} key={restaurant?.info?.id} />
      ))}
    </div>
  ) : (
    <h1>hey</h1>
  );
}

export default Body;
