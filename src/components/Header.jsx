import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="navbar bg-base-100 sticky top-0 z-50 shadow">
        <div className="navbar-start">
          <div className="dropdown">
            <div role="button" className="btn btn-ghost btn-circle">
              <img
                width="100"
                height="100"
                src="https://img.icons8.com/stickers/100/harry-potter.png"
                alt="harry-potter"
              />
            </div>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">Potter Database</a>
        </div>
        <div className="navbar-end">
          <a
            className="btn btn-ghost btn-circle"
            href="https://github.com/ranjandevelop"
          >
            <img
              width="35"
              height="35"
              src="https://img.icons8.com/color/48/harry-potter-.png"
              alt="harry-potter-"
            />
          </a>
          <a
            className="btn btn-ghost btn-circle"
            href="https://github.com/ranjandevelop/harry-potter-db"
          >
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/fluency-systems-regular/48/github.png"
              alt="github"
            />
          </a>
        </div>
      </div>

      <Outlet />

      <footer className="footer p-4 text-neutral-content flex border">
        <a href="https://github.com/ranjandevelop">Github</a>
      </footer>
    </>
  );
};

export default Header;
