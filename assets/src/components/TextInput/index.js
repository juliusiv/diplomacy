import React, { useState } from "react"
import classNames from "classnames";

import css from "<style>";
import style from "./style.css"

const TextInput = ({ label, placeholder, className, ...props }) => {
  const [value, setValue] = useState(undefined)

  return (
    <div>
      <label className={css`block`}>{label}</label>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        className={classNames(style.textInput, css`fontNormal block`, className)}
        onChange={e => setValue(e.target.value)}
      />
    </div>
  )
}

export default TextInput
