import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="navbar h-20 card-bg shadow-sm">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/AllServices">All Services</NavLink>
            </li>

            {user ? (
              <>
                <li>
                  <NavLink to="/AddServices">Add Services</NavLink>
                </li>
                <li>
                  <NavLink to={`/MyServices/${user?.email}`}>
                    My Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/my-reviews">My Reviews</NavLink>
                </li>
                <li>
                  <button
                    onClick={logOut}
                    className="btn btn-bg w-full mt-1"
                  >
                    Logout
                  </button>
                </li>
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
        <Link to={"/"} className="btn btn-ghost text-xl">
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

          {user ? (
            <>
              <li>
                <NavLink to="/AddServices">Add Services</NavLink>
              </li>
              <li>
                <NavLink to={`/MyServices/${user?.email}`}>My Services</NavLink>
              </li>
              <li>
                <NavLink to={`/my-reviews`}>My Reviews</NavLink>
              </li>
              {user && (
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
              )}
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
