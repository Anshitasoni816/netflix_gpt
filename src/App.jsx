import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Body from "./components/Body";
import Browse from "./components/Browse";
import Login from "./components/Login";
import appStore from "./utils/appStore";
import AppLayout from "./components/AppLayout";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
};

export default App;
