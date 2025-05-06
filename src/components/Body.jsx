import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { SWIGGY_API_URL } from "../constants";

function Body() {
  // const burgerKing = {
  //   name: "Burger King",
  //   img: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1661383215/nd7il0qt6kjphdcu7hf7.jpg",
  //   cuisines: ["Burgers", "American"],
  //   ratings: "4.2",
  // };
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    getRestaurants();
    console.log(restaurants);
    // return () => {};
  }, []);

  function getRestaurants() {
    fetch(
      SWIGGY_API_URL
    )
      .then((res) => res.json())
      .then((res) => {
        // res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
        //   (restaurant) => console.log(restaurant?.info?.name)
        // )
        const res2 =
          res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        console.log(res2);
        setRestaurants(res2);
        console.log(restaurants);
      });
  }
  return restaurants?.length > 0 ? (
    <div className="flex flex-wrap gap-[20] items-center justify-center" >
      {restaurants.map((restaurant) => (
        <RestaurantCard data={restaurant} key={restaurant?.info?.id}/>
      ))}
    </div>
  ) : (
    <h1>hey</h1>
  );
}

export default Body;
