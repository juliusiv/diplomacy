import React, { useState } from "react"
import classNames from "classnames";

const Radio = ({ options, name, className, ...props }) => {
  const [value, setValue] = useState(undefined)

  return (
    <div className={className}>
      {options.map(value => (
        <div key={value}>
          <input
            type="radio"
            value={value}
            className={classNames("bg-gray-900 text-base block float-left mr-2", className)}
            onChange={e => setValue(e.target.value)}
            name={name}
          />
          <label className="block">{value}</label>
        </div>
      ))}
    </div>
  )
}

export default Radio
