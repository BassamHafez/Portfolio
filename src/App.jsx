import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainError from "./Pages/Error/MainError";
import Root from "./Pages/Root";
import NotFound from "./Pages/Error/NotFound";
import Home from "./Pages/Home/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <MainError />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
