import { Outlet } from "react-router-dom";
import Navbar from "../Components/Layout/Navbar";
import Footer from "../Components/Layout/Footer";

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
