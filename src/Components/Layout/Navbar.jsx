import { NavLink } from "react-router-dom";
import SwapBtn from "../UI/Buttons/SwapBtn";

const Navbar = () => {
  const generalLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div className="navbar bg-base-200 px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {generalLinks.map((link, index) => (
              <li className="my-2" key={`${link.to}_${index}`}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? " text-cyan-500 border-0 border-b-2 border-cyan-500 rounded-none hover:rounded-sm"
                      : "border-transparent hover:border-b-cyan-500  hover:text-cyan-500 duration-300"
                  }
                  to={link.to}
                  end
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="navbar-center ps-18 hidden lg:flex w-full">
        <ul className="menu menu-horizontal px-1">
          {generalLinks.map((link, index) => (
            <li className="mx-4" key={`${link.to}_${index}`}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-cyan-500 border-0 border-b-2 border-cyan-500 rounded-none hover:rounded-sm"
                    : "border-transparent hover:border-b-cyan-500  hover:text-cyan-500 duration-300"
                }
                to={link.to}
                end
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <SwapBtn/>
      </div>
    </div>
  );
};

export default Navbar;
