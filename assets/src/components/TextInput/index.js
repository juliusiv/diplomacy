import React, { useState } from "react"
import classNames from "classnames";

const TextInput = ({ label, placeholder, className, ...props }) => {
  const [value, setValue] = useState(undefined)

  return (
    <div>
      <label className="block">{label}</label>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        className={classNames("border-solid rounded p-3 font-light border-gray-300", "block", className)}
        onChange={e => setValue(e.target.value)}
      />
    </div>
  )
}

export default TextInput
