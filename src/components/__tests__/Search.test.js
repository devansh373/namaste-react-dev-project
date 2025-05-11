import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../mocks/mockFetchRestaurantData";
import FetchRestaurantsContext from "../../context/fetchRestaurantsContext";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(RESTAURANT_DATA),
  })
);

test("Search results on homepage", () => {
    const mockContextValue = {
        restaurants: [], // <-- This triggers the Shimmer
        setRestaurants: jest.fn(),
      };
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <FetchRestaurantsContext value={mockContextValue}>
        <Body />
        </FetchRestaurantsContext>
      </Provider>
    </StaticRouter>
  );
//   console.log(body);
  const shimmer = body.getByTestId("shimmer-test-id");
  expect(shimmer).toBeInTheDocument();
  console.log(shimmer)
});
