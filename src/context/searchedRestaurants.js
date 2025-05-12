import { createContext } from "react";

const SearchedRestaurantsContext = createContext({
  searchedRestaurants: ["hey"],
  setSearchedRestaurants: () => {},
  inputValue: "",
  setInputValue: () => {},
});
// console.log(SearchedRestaurantsContext)
export default SearchedRestaurantsContext;
