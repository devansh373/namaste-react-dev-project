import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import FetchRestaurantsContext from "../context/fetchRestaurantsContext";
import { IMG_CDN_URL } from "../constants";
import {
  MdLocalOffer,
  MdLocationPin,
  MdOutlineStarPurple500,
  MdStars,
} from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { HiMiniXCircle } from "react-icons/hi2";
import { FaCircleCheck } from "react-icons/fa6";

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
          <h1 className=" text-5xl font-medium">{restaurantFound?.name}</h1>
          <div className=" flex mt-1 gap-[15%] items-center text-[1.1rem]">
            <p className=" flex gap-[5px] items-center">
              <MdStars className=" inline text-green-800" />
              {restaurantFound?.avgRatingString}(
              {restaurantFound?.totalRatingsString})
            </p>
            <p className="flex gap-[5px] items-center">
              <MdLocationPin className=" inline text-red-600" />
              {restaurantFound?.areaName}
            </p>
          </div>
          {restaurantFound?.isOpen ? (
            <p className="flex gap-[5px] items-center text-center w-full">
              This restaurant is currently <span className="font-medium">Open</span>
              <FaCircleCheck className="text-green-400 inline" />
            </p>
          ) : (
            <p>
              This restaurant is currently <span className="font-medium">Closed</span>
              <HiMiniXCircle className="text-red-800 inline"/>
            </p>
          )}
        </div>
      </div>
      <div className=" border border-solid border-red-500 text-center my-[20px] font-medium flex gap-[5%] justify-center text-[1.1rem]">
        <span className=" flex gap-[3%] items-center w-[150px]">
          <BiSolidOffer className=" inline text-red-400" />
          {restaurantFound?.costForTwo}
        </span>
        <span className="flex gap-[3%] items-center w-[150px]">
          <MdLocalOffer className=" inline text-green-800" />
          {restaurantFound?.aggregatedDiscountInfoV3?.header}{" "}
          {restaurantFound?.aggregatedDiscountInfoV3?.subHeader}
        </span>
      </div>
      <div className=" w-full flex justify-between">
        <div className=" p-[10px]">menu</div>

        <div className="w-[400] ">
          <h1 className="font-medium text-center text-2xl underline">
            Details
          </h1>
          <div className="  flex justify-around ">
            <span>Ratings:</span>
            <span className="font-medium">
              {restaurantFound?.avgRatingString}
            </span>
          </div>
          <div className="flex justify-around">
            <span>Distance:</span>
            <span className="font-medium">
              {restaurantFound?.sla?.lastMileTravelString}
            </span>
          </div>
          <div className="flex justify-around">
            <span>Time for Delivery:</span>
            <span className="font-medium">
              {restaurantFound?.sla?.slaString}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default RestaurantDetails;
