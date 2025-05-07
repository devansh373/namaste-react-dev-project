import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import FetchRestaurantsContext from "../context/fetchRestaurantsContext";
import { IMG_CDN_URL } from "../constants";

function RestaurantDetails() {
  const { id } = useParams();
  // const {restaurants,setRestaurants} = useContext(FetchRestaurantsContext);
  const { restaurants } = useContext(FetchRestaurantsContext);
  const restaurantFound = restaurants.filter(
    (restaurant) => restaurant?.info?.id === id
  )[0]?.info;
  console.log(restaurants, restaurantFound);
  return (
    <>
      <div className="flex items-center justify-around">
        <img
          src={`${IMG_CDN_URL}${restaurantFound?.cloudinaryImageId}`}
          alt=""
        />
        <div>
          <h1 className=" text-5xl">{restaurantFound?.name}</h1>
          <div className=" flex justify-around">
            <p>location icon</p>
            <p>{restaurantFound?.areaName}</p>
            <p>Ratings: {restaurantFound?.totalRatingsString}</p>
          </div>
        </div>
      </div>
      <div className=" border border-red-500 w-[400]">
        <div className="flex justify-around">
          <span>Ratings:</span>
          <span>{restaurantFound?.avgRatingString}</span>
        </div>
        <div className="flex justify-around">
          <span>Distance:</span>
          <span>{restaurantFound?.sla?.lastMileTravelString}</span>
        </div>
        <div className="flex justify-around">
          <span>Time for Delivery:</span>
          <span>{restaurantFound?.sla?.slaString}</span>
        </div>
      </div>
    </>
  );
}

export default RestaurantDetails;
