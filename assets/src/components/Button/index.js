import React from "react"
import classNames from "classnames";

import style from "./style.css"
import css from "<style>"

export const ROLES = {
  PRIMARY: "PRIMARY",
  SECONDARY: "SECONDARY"

}
const ROLE_COLORS = {
  // PRIMARY: css`bgBlue`,
  PRIMARY: css`cWhite bgBlue`,
  SECONDARY: css`bgOrange`
}

const Button = ({ children, role, className, ...props }) => {
  return (
    <div className={classNames(style.button, ROLE_COLORS[role], className)}>
      {children}
    </div>
  )
}

export default Button
