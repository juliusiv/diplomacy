import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import classNames from "classnames";

import { Link } from "react-router-dom"
import Pages from "./Pages";

const NavLink = ({ children, className, to, ...props }) => {
  const isActive = useRouteMatch({ path: to })

  const classes = classNames(
    "ml-4 mr-4 text-gray-900 text-lg no-underline font-copperplate hover:text-yellow-900",
    { "text-yellow-900 border-b-8 border-yellow-500": isActive },
    className
  );

  return (
    <>
      <Link to={to} {...props} className={classes}>
        {children}
      </Link>
    </>
  );
};

const PageLinks = [
  {
    title: "About",
    to: "/about",
    page: Pages.About,
  },
  {
    title: "Games",
    to: "/games",
    page: Pages.Games,
  },
  {
    title: "Account",
    to: "/account",
    page: Pages.Account,
  },
];

const Navigation = ({ active, ...props }) => {
  return (
    <nav className="text-gray-900 w-full bg-white flex flex-col items-center border-b border-yellow-900 shadow-sm" {...props}>
        <div className="flex flex-row w-8/12 items-baseline">
          <Link to={"/"} className="no-underline text-gray-900 mr-4">
            <h1 className="text-5xl font-copperplate">Diplomacy</h1>
          </Link>
          {
            PageLinks.map(({ to, page, title }) => (
              <NavLink
                to={to}
                key={page}
              >
                {title}
              </NavLink>
            ))
          }
          <NavLink
            to="/login"
            key={Pages.Login}
            className="ml-auto"
          >
            Login
          </NavLink>
        </div>
    </nav>
  );
};

export default Navigation;
