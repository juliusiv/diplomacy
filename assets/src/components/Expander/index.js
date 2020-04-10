import React, { useState } from "react"
import {useTransition, animated} from 'react-spring'

import css from "<style>";

const Expander = ({ title, children }) => {
  // const props = useSpring({opacity: 1, from: {opacity: 0}})
  // const props = useTransition()
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div onClick={() => setIsExpanded(!isExpanded)}>
      <div className={css`bgBlack cursorPointer p1`}>
        <div className={css`cOffwhite`}>
          <div className={css`bold absolute pl2`}>{isExpanded ? "–" : "+"}</div>
          <p>{title}</p>
        </div>
      </div>

      {isExpanded && (
        <div className={css`borderLeft borderRight borderBottom bcBlack`}>
          {children}
        </div>
      )}
    </div>
  )
}

export default Expander;
