import React, { useState } from "react"
import classNames from "classnames";

const EMAIL_REGEX = new RegExp(/[^@]+@[^\.]+\..+/, "g");

const validateEmail = value => new RegExp(/[^@]+@[^\.]+\..+/, "g").test(value)

const VALIDATORS = {
  "email": validateEmail
}

const TextInput = ({ label, placeholder, className, type = "text", validator, ...props }) => {
  const [value, setValue] = useState(undefined)
  if (validator === undefined && VALIDATORS.hasOwnProperty(type)) {
    validator = VALIDATORS[type]
  } else {
    validator = _ => true
  }

  const isValid = value === undefined || validator(value)
  console.log(isValid)

  return (
    <div className={className}>
      <label className="block font-bold">{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className={classNames(
          "border border-gray-400 rounded-sm pt-1 pb-1 pl-2 pr-2 font-mono border-gray-300 block w-full",
          {
            "bg-red-100": !isValid
          },
        )}
        onChange={e => setValue(e.target.value)}
      />
    </div>
  )
}

export default TextInput
