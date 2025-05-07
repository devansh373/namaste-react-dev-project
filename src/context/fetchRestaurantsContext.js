import { createContext } from "react";

const FetchRestaurantsContext = createContext({
  restaurants: ["hey"],
  setRestaurants: () => {},
});
// console.log(FetchRestaurantsContext)
export default FetchRestaurantsContext;
