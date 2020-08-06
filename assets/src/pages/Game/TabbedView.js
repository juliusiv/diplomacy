import React from "react";
import classNames from "classnames";
import { Link, Route, Router, Switch, useHistory, useRouteMatch } from "react-router-dom";

// The Tab component is really just a wrapper to ensure some props.
const Tab = ({ title, children, path, ...props }) => children

const Title = ({ text, path, history }) => {
  const match = useRouteMatch(path)
  const isActive = match && match.isExact

  const className = classNames(
    "cursor-pointer font-copperplate",
    {
      "font-md": !isActive,
      "font-4xl bold": isActive
    }
  )
  const onClick = () => !isActive && history.push(path)
  return (
    <Link to={path} className="no-underline text-black">
      <span key={text} className={className} onClick={onClick}>
        {text}
      </span>
    </Link>
  );
}

const TabbedView = ({ children, ...props }) => {
  const history = useHistory();
  const { url: matchPath } = useRouteMatch()
  const tabPath = path => `${matchPath}${path === "/" ? "" : path}`

  return (
    <div>
      <div className="flex-row items-baseline">
        {children.map(({ props }, i) => {
          const { title, path } = props
          const isLast = i === (children.length - 1)

          return (
            <div key={path}>
              <Title text={title} path={tabPath(path)} history={history} />
              {!isLast && <span className="font-xs ml-2 mr-2">★</span>}
            </div>
          )
        })}
      </div>
      <Router history={history}>
        <Switch>
          {children.map(child => (
            <Route key={child.props.path} path={tabPath(child.props.path)} exact>
              {child}
            </Route>
          ))}
        </Switch>
      </Router>
    </div>
  )
}

export default TabbedView

export {
  Tab
}
