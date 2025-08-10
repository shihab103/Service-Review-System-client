import React, { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";

const Footer = () => {
  const { user } = useContext(AuthContext);

  return (
    <footer className="footer items-center  max-w-[1440px] mx-auto sm:footer-horizontal  text-base-content p-4 flex flex-col sm:flex-row sm:justify-between text-center sm:text-left">
      {/* Services Section */}
      <nav>
        <h6 className="footer-title">Services</h6>
        <NavLink className="link link-hover" to="/AllServices">
          All Services
        </NavLink>
        {user && (
          <>
            <NavLink className="link link-hover" to="/AddServices">
              Add Services
            </NavLink>
            <NavLink
              className="link link-hover"
              to={`/MyServices/${user?.email}`}
            >
              My Services
            </NavLink>
            <NavLink className="link link-hover" to="/my-reviews">
              My Reviews
            </NavLink>
          </>
        )}
      </nav>

      {/* Company Section */}
      <nav>
        <h6 className="footer-title">Company</h6>
        <NavLink className="link link-hover" to="/">
          Home
        </NavLink>
        {!user && (
          <>
            <NavLink className="link link-hover" to="/signin">
              Login
            </NavLink>
            <NavLink className="link link-hover" to="/signup">
              Register
            </NavLink>
          </>
        )}
        <NavLink className="link link-hover" to="/about">
          About Us
        </NavLink>
        <NavLink className="link link-hover" to="/contact">
          Contact
        </NavLink>
      </nav>

      {/* Social Section */}
      <nav>
        <h6 className="footer-title mb-2">Social</h6>
        <div className="grid grid-flow-col gap-4">
          {/* Twitter */}
          <a
            href="https://x.com/shihab_web_dev?s=21"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-[#8b5e3c]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/shihab-web-dev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#8b5e3c]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.783 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.07-.02-2.44-1.5-2.44-1.5 0-1.73 1.17-1.73 2.37v4.57h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2 3.61 4.59v4.72z" />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/csei52s2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-[#8b5e3c]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
