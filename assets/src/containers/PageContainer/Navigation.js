import React from "react";
import classNames from "classnames";

import { Link } from "react-router-dom"
import Pages from "./Pages";

const NavLink = ({ children, isActive, isLast, ...props }) => {
  const classes = classNames(
    "ml-4 mr-4 inline-block text-black text-lg no-underline font-copperplate hover:font-bold",
    { "font-bold": isActive }
  );

  return (
    <>
      <Link {...props} className={classes}>
        {children}
      </Link>
    </>
  );
};

const PAGE_LINKS = [
  {
    title: "About",
    to: "/about",
    page: Pages.ABOUT,
  },
  {
    title: "Games",
    to: "/games",
    page: Pages.GAMES,
  },
  {
    title: "Account",
    to: "/account",
    page: Pages.ACCOUNT,
  },
];

const Navigation = ({ active, ...props }) => {
  return (
    <nav className="text-black pb-3 w-full bg-white flex flex-col items-center border-b border-black shadow-sm" {...props}>
        <div className="flex flex-row w-9/12 items-baseline">
          <Link to={"/"} className="no-underline text-black mr-4">
            <h1 className="text-5xl font-copperplate">Diplomacy</h1>
          </Link>
          {
            PAGE_LINKS.map(({ to, page, title }, i) => (
              <NavLink
                to={to}
                isActive={page === active}
                key={page}
                isLast={PAGE_LINKS.length === (i + 1)}
              >
                {title}
              </NavLink>
            ))
          }
        </div>
    </nav>
  );
};

export default Navigation;
