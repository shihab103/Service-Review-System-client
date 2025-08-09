import { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="drawer bg-[#bfac9c] lg:drawer-open min-h-screen">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar for small devices */}
        <div className="navbar card-bg lg:hidden w-full">
          <div className="flex-none">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2 font-semibold text-lg text-[#513326]">
            Dashboard
          </div>
        </div>

        {/* Page content */}
        <div className="p-6">
          <h1 className="text-4xl text-center font-bold text-[#6e4528]">
            Welcome, {user?.displayName || user?.email}
          </h1>

          <Outlet />
        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="w-80 min-h-full card-bg px-6 py-8 flex flex-col">
          <Link
            to={"/"}
            className="font-extrabold text-3xl text-[#513326] mb-8 select-none"
          >
            ServiceScout
          </Link>

          <ul className="menu flex flex-col text-[#513326] text-lg">
            {[
              { to: "/dashboard", label: "Dashboard Home" },
              { to: "/dashboard/AddServices", label: "Add Service" },
              { to: "/dashboard/MyServices/:email", label: "My Services" },
              { to: "/dashboard/my-reviews", label: "My Reviews" },
            ].map(({ to, label }, idx, arr) => (
              <NavLink
                key={to}
                to={to}
                end
                className={({ isActive }) =>
                  isActive
                    ? "block bg-[#bfac9c] font-bold shadow-md text-[#513326]"
                    : ""
                }
              >
                {({ isActive }) => (
                  <li
                    className={`
                      px-6 py-3 cursor-pointer transition-colors duration-300
                      ${
                        isActive
                          ? "bg-[#bfac9c] font-bold shadow-md"
                          : "hover:bg-[#c3b296] hover:text-[#3e2e1f]"
                      }
                      ${
                        idx !== arr.length - 1
                          ? "border-b border-[#bba887]"
                          : "border-b-0"
                      }
                    `}
                  >
                    {label}
                  </li>
                )}
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
