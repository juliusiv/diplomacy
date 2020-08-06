import React from "react"
import classNames from "classnames";

export const ROLES = {
  PRIMARY: "PRIMARY",
  SECONDARY: "SECONDARY"

}
const ROLE_COLORS = {
  PRIMARY: "text-white bg-blue-500",
  SECONDARY: "bg-red-500"
}

const Button = ({ children, role, className, ...props }) => {
  return (
    <div className={classNames("cursor-pointer pt-1 pr-3 pb-1 pl-3 w-auto inline-block", ROLE_COLORS[role], className)}>
      {children}
    </div>
  )
}

export default Button
