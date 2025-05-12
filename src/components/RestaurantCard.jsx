import React from 'react'
import { IMG_CDN_URL } from '../constants'
import { Link } from 'react-router-dom'

function RestaurantCard({data}) {
    // const data = restaurant?.info
    // console.log(data,restaurant)
  return (<>
    <Link to={`/restaurant/${data?.info?.id}`} className="restaurant-card flex-col gap-3 border border-red-500 rounded-2xl overflow-hidden pb-2 w-[250] h-[300px] cursor-pointer">
      <img src={`${IMG_CDN_URL}${data?.info?.cloudinaryImageId}`} className=' w-[250] h-[250] '/>
      <h2 className=' text-center mt-1'>{data?.info?.name}</h2>
      {/* <h3>{data.cuisines.join(", ")}</h3> */}
      {/* <h4>{data.ratings} stars</h4> */}
    </Link>
  </>
  )
}

export default RestaurantCard