import React from "react";

import classNames from "classnames";

const A = ({ href, children, className, ...props }) => {
  return (
    <a
      href={href}
      className={classNames(
        "underline text-yellow-700 w-auto inline-block cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
};

export default A;
