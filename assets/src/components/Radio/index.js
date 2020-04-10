import React, { useState } from "react"
import classNames from "classnames";

import css from "<style>";
import style from "./style.css"

const Radio = ({ options, name, className, ...props }) => {
  const [value, setValue] = useState(undefined)

  return (
    <div className={className}>
      {options.map(value => (
        <div>
          <input
            type="radio"
            value={value}
            className={classNames(style.radio, css`fontNormal block floatLeft mr2`, className)}
            onChange={e => setValue(e.target.value)}
            name={name}
          />
          <label className={css`block`}>{value}</label>
        </div>
      ))}
    </div>
  )
}

export default Radio
