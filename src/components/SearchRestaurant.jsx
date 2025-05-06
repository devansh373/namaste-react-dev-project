import React from "react";

function SearchRestaurant() {
  return (
    <input
      type="text"
      name="search-restaurant"
      id="search-restaurant"
      className=" border border-red-500 rounded-[6] text-xl text-gray-500 p-2"
      placeholder="Search..."
    />
  );
}

export default SearchRestaurant;
