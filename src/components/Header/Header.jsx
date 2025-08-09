import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="navbar sticky top-0 z-50 h-20 card-bg shadow-sm">
      <div className="navbar-start">
        {/* Mobile dropdown */}
        {/* ... your existing dropdown code ... */}
        <Link to={"/"} className="font-bold text-[#513326] text-xl">
          ServiceScout
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 items-center">
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
              <div className="flex justify-around items-center gap-2">
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
