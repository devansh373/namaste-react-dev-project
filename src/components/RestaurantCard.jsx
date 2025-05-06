import React from 'react'
import { IMG_CDN_URL } from '../constants'

function RestaurantCard({data}) {
    // const data = restaurant?.info
    // console.log(data,restaurant)
  return (
    <div className="restaurant-card flex-col gap-3 border border-red-500 rounded-2xl overflow-hidden pb-2 w-[300] h-auto cursor-pointer">
      <img src={`${IMG_CDN_URL}${data?.info?.cloudinaryImageId}`} className=' w-[250] h-auto '/>
      <h2 className=' text-center mt-1'>{data?.info?.name}</h2>
      {/* <h3>{data.cuisines.join(", ")}</h3> */}
      {/* <h4>{data.ratings} stars</h4> */}
    </div>
  )
}

export default RestaurantCard