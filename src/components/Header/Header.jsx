import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const menuItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/AllServices"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          All Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Dashboard
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar sticky top-0 z-50 h-20 card-bg shadow-sm px-4">
      {/* Left: Logo */}
      <div className="navbar-start">
        <Link to={"/"} className="font-bold h1 text-xl">
          ServiceScout
        </Link>
      </div>

      {/* Center: Menu (large screens) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 items-center">{menuItems}</ul>
      </div>

      {/* Right: Dark Mode Toggle, Avatar, Logout (large screens) */}
      <div className="navbar-end hidden lg:flex items-center gap-4">
        {/* Dark mode toggle */}
        <ThemeToggle />

        {/* User avatar */}
        {user?.photoURL && (
          <img
            src={user.photoURL}
            alt="avatar"
            referrerPolicy="no-referrer"
            className="w-8 h-8 rounded-full border-2 border-[#8b5e3c]"
          />
        )}

        {/* Logout button or Login/Register */}
        {user ? (
          <button className="btn border-0 btn-bg text-white" onClick={logOut}>
            Logout
          </button>
        ) : (
          <div className="flex gap-2">
            <Link to="/signin" className="btn btn-outline btn-sm">
              Login
            </Link>
            <Link to="/signup" className="btn btn-sm btn-bg text-white">
              Register
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Right: Theme Toggle + Dropdown Menu */}
      <div className="navbar-end flex lg:hidden items-center gap-2">
        {/* Dark mode toggle */}
        <ThemeToggle />

        {/* Dropdown menu */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow card-bg rounded-box w-52"
          >
            {menuItems}
            <li className="lg:hidden mt-2">
              {user ? (
                <button
                  className="btn border-0 btn-bg text-white w-full"
                  onClick={logOut}
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link to="/signin" className="btn btn-outline btn-sm w-full mb-2">
                    Login
                  </Link>
                  <Link to="/signup" className="btn btn-bg text-white btn-sm w-full">
                    Register
                  </Link>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
