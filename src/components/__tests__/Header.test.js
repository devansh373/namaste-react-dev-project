import { getAllByTestId, render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../redux/store";
// test("Logo should load when Header renders", () => {
//   const header = render(
//     <StaticRouter>

//     <Provider store={store}>
//       <Header />
//     </Provider>
//     </StaticRouter>
//   );
//   console.log(header);
// });
test("Online/Offline status should be online when Header renders", () => {
    
  const header = render(
    <StaticRouter>

    <Provider store={store}>
      <Header />
    </Provider>
    </StaticRouter>
  );
//   console.log(header);

  const status = header.getAllByTestId("online-status")[0];
//   can also use getByTestId()
//   console.log(status)
  expect(status.innerHTML).toBe("Online")
});
