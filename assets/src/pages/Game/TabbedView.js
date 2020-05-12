import React from "react";
import classNames from "classnames";
import { Link, Route, Router, Switch, useHistory, useRouteMatch } from "react-router-dom";

import css from "<style>";

const Tab = ({ title, children, path, ...props }) => {
  return (
    <Route path={path} strict={false}>
      {children}
    </Route>
  )
}

const Title = ({ text, path, history }) => {
  const match = useRouteMatch(path)
  const isActive = match && match.isExact

  const className = classNames(
    css`cursorPointer copperplate`,
    {
      [css`fontMedium`]: !isActive,
      [css`fontLarge bold`]: isActive
    }
  )
  const onClick = () => !isActive && history.push(path)
  return (
    <Link to={path} className={css`underlineNone cBlack`}>
      <span key={text} className={className} onClick={onClick}>
        {text}
      </span>
    </Link>
  );
}

const TabbedView = ({ children, ...props }) => {
  const history = useHistory();
  const { url: matchPath } = useRouteMatch()
  // const tabs = children.map(({ props: { component: C, path } }) => <C key={path} />)

  return (
    <div>
      <div className={css`flex row alignBaseline`}>
        {children.map(({ props }, i) => {
          const { title, path } = props
          const isLast = i === (children.length - 1)
          const tabPath = `${matchPath}${path === "/" ? "" : path}`

          return (
            <div key={path}>
              <Title text={title} path={tabPath} history={history} />
              {!isLast && <span className={css`fontTiny ml2 mr2`}>★</span>}
            </div>
          )
        })}
      </div>
      <Router history={history}>
        <Switch>{children}</Switch>
      </Router>
    </div>
  )
}

export default TabbedView

export {
  Tab
}
