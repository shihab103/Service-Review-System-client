import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const menuItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/AllServices">All Services</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>

      {user ? (
        <>
          <li>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
          </li>
          <div className="flex justify-around items-center gap-2 px-4">
            {/* Avatar — hidden on small devices */}
            {user?.photoURL && (
              <img
                src={user.photoURL}
                referrerPolicy="no-referrer"
                alt="avatar"
                className="w-8 rounded-full hidden md:flex"
              />
            )}
            <button className="btn border-0 btn-bg" onClick={logOut}>
              Logout
            </button>
          </div>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/signin">Login</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Register</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar sticky top-0 z-50 h-20 card-bg shadow-sm">
      {/* Navbar Start — Logo */}
      <div className="navbar-start">
        <Link to={"/"} className="font-bold text-[#513326] text-xl">
          ServiceScout
        </Link>
      </div>

      {/* Mobile Menu — Right side */}
      <div className="navbar-end lg:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </ul>
        </div>
      </div>

      {/* Navbar End for large devices */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 items-center">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Header;
