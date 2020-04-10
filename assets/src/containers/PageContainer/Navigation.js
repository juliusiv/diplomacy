import React from "react";
import classNames from "classnames";

import { Link } from "react-router-dom"
import css from "<style>";
import Pages from "./Pages";
import styles from "./style.css"

const NavLink = ({ children, isActive, isLast, ...props }) => {
  const classes = classNames(
    css`ml2 mr2 mb block cBlack copperplate underlineNone`,
    styles.navLink,
    { [css`underline`]: isActive }
  );

  return (
    <>
      <Link {...props} className={classes}>
        {children}
      </Link>
      {!isLast && <span className={css`fontTiny`}>★</span>}
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

const FancyBottom = ({ children }) => {
  return (
    <div className={css`pb1 bcGrey borderBottom widthAll`}>
      <div className={css`pb1 bcRed borderBottom widthAll`}>
        <div className={css`bcOrange borderBottom widthAll`}>
          {children}
        </div>
      </div>
    </div>
  )
}

const Navigation = ({ active, ...props }) => {
  return (
    <nav className={css`cBlack widthAll`} {...props}>
      <FancyBottom>
        <div className={css`flex column justifyCenter alignCenter pb3`}>
          <Link to={"/"} className={css`underlineNone cBlack`}>
            <h1 className={css`copperplate fontHuge`}>Diplomacy</h1>
          </Link>
          <div className={css`flex row alignBaseline`}>
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
        </div>
      </FancyBottom>
    </nav>
  );
};

export default Navigation;
