import React from "react"
import classNames from "classnames";

export const Roles = {
  Primary: "Primary",
  Secondary: "Secondary"

}
const RoleColors = {
  Primary: "text-yellow-900 border-yellow-900",
  Secondary: "text-red-900 border-red-900"
}
const RoleBgColors = {
  Primary: "bg-yellow-400",
  Secondary: "bg-red-500"
}

const Button = ({ children, role = Roles.Primary, className, outline = false, ...props }) => {
  console.log(outline, children)
  return (
    <div
      className={classNames(
        "cursor-pointer pt-1 pr-3 pb-1 pl-3 w-auto inline-block rounded-sm border",
        RoleColors[role],
        {
          [RoleBgColors[role]]: !outline,
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default Button
