import React from "react";
import classnames from "classnames"
import Navigation from "./Navigation";
import css from "<style>";
import style from "./style.css"

const PageContainer = ({ page, children, withNavigation, ...props }) => {
  return (
    <div className={css`heightAll flex column cBlack`} {...props}>
      {
        withNavigation && <Navigation active={page} />
      }
      <div className={css`pt4 flex justifyCenter widthAll`}>
        <div className={style.content}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageContainer;
