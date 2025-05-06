import React from 'react'
import { useParams } from 'react-router-dom'

function RestaurantDetails() {
    const {id} = useParams()
  return (
    <div>Restaurant id : {id}</div>
  )
}

export default RestaurantDetails