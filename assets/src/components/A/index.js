import React from "react"

const A = ({ href, children }) => {
  return (
    // <a href={href} className={style.link}>
    <a href={href} className="underline text-red-700">
      {children}
    </a>
  )
}

export default A
