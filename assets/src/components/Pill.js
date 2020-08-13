import React from "react"

const Pill = ({ children, ...props }) => {
  return (
    <div className="bg-red-500 pt-1 pr-3 pb-1 pl-3 w-auto rounded inline-block" {...props}>
      {children}
    </div>
  )
}

export default Pill;
