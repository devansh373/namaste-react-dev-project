import React, { useContext } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import useOnline from "../hooks/useOnline";
import UserContext from "../context/userContext";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/cartSlice";
import SearchRestaurant from "./SearchRestaurant";
// import store from "../redux/store";

function Header() {
  const isOnline = useOnline();
  const user = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(addItem("Mango"));
  };
  return (
    <div className="flex my-7 ">
      <Title />
      <SearchRestaurant />
      <div className="nav-items w-[100%]">
        <ul className=" h-[100%] flex justify-around  [&_*]:cursor-pointer  [&_*:hover]:underline [&_*]:items-center">
          <li>Home</li>
          <Link to={"/about"}>
            <li>About</li>
          </Link>
          <li>Contact</li>
          {/* <li>{user.name}</li> */}
          <Link to={"/cart"}>
            <li>Cart-{cartItems.length} items</li>
          </Link>
          {/* <li onClick={handleAddItem}>Add Itemm</li> */}
          {/* <li>{isOnline ? "Online" : "Offline"}</li> */}
          {/* restrict user from clicking any restaurant while offline or you can show dino game(google) lol */}
        </ul>
      </div>
    </div>
  );
}

export default Header;
