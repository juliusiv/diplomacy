import React from "react"

import style from "./style.css"

const A = ({ href, children }) => {
  return (
    <a href={href} className={style.link}>
      {children}
    </a>
  )
}

export default A
