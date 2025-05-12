import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Title from "./components/Title";
import RestaurantCard from "./components/RestaurantCard";
import { SWIGGY_API_URL } from "./constants";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantDetails from "./components/RestaurantDetails";
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./index.css";
import FetchRestaurantsContext from "./context/fetchRestaurantsContext";
import SearchedRestaurantsContext from "./context/searchedRestaurants";

// import Cart from "./components/Cart";
// lazy load Cart component
const Cart = lazy(() => import("./components/Cart"));

async function getRestaurants() {
  const data = await fetch(`${SWIGGY_API_URL}`);
  //   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();
  console.log(json);
}

// const Header = () => {
//   return (
//     <>
//       <Title />
//       <div className="nav-items">
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact</li>
//           <li>Cart</li>
//         </ul>
//       </div>
//     </>
//   );
// };

// const RestaurantCard = () => {
//   return (
//     <div className="card">
//       <img src={burgerKing.img} />
//       <h2>{burgerKing.name}</h2>
//       <h3>{burgerKing.cuisines.join(", ")}</h3>
//       <h4>{burgerKing.ratings} stars</h4>
//     </div>
//   );
// };

// const Body = () => {
//   return (
//     <>
//       <RestaurantCard data={burgerKing} />
//     </>
//   );
// };
// const Footer = () => {
//   return <h4>Footer</h4>;
// };

const AppLayout = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchedRestaurants, setSearchedRestaurants] = useState([]);
  const [inputValue, setInputValue] = useState("")
  // const restaurantsContext = useContext(FetchRestaurantsContext);
  // console.log(restaurantsContext)
  
  useEffect(() => {
    // console.log(restaurantsContext)
    console.log(restaurants);
    
  }, [restaurants]);

  useEffect(() => {
    // getRestaurants();
    fetch(SWIGGY_API_URL)
      .then((res) => res.json())
      .then((res) => {
        const data =
          res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        setRestaurants(data || []);
        setSearchedRestaurants(data||[]);
      });
    // console.log(restaurants);
    // return () => {};
  }, []);
  function getRestaurants() {
    fetch(SWIGGY_API_URL)
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
        
      });
  }
  

  return (
    <>
      <Provider store={store}>
        <FetchRestaurantsContext.Provider value={{restaurants,setRestaurants}}>
          <SearchedRestaurantsContext.Provider value={{searchedRestaurants,setSearchedRestaurants,inputValue,setInputValue}}>

          <Header />
          <Outlet />
          {/* <Body /> */}
          <Footer />
          </SearchedRestaurantsContext.Provider>
        </FetchRestaurantsContext.Provider>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetails />,
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Cart />
          </Suspense>
        ),
      },
      // without suspense(react uses it bts)
      // {
      //     path:"/cart",
      //     element:<Cart/>
      // },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
// root.render(HeaderComponent())
