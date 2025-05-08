import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainError from "./Pages/Error/MainError";
import Root from "./Pages/Root";
import NotFound from "./Pages/Error/NotFound";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";

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
        { path: "about", element: <About /> },
        { path: "projects", element: <Projects /> },
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
