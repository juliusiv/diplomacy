import React from "react";
import classNames from "classnames";
import {
  Link,
  Route,
  Router,
  Switch,
  useHistory,
  useRouteMatch,
} from "react-router-dom";

// The Tab component is really just a wrapper to ensure some props.
const Tab = ({ title, children, path, ...props }) => children;

const Title = ({ text, path, history }) => {
  const match = useRouteMatch(path);
  const isActive = match && match.isExact;

  const className = classNames(
    "cursor-pointer font-copperplate mr-8 hover:text-red-900",
    {
      "text-xl": !isActive,
      "text-xl bold border-b-4 border-red-300 text-red-900": isActive,
    }
  );
  const onClick = () => !isActive && history.push(path);
  return (
    <Link to={path} className="no-underline text-gray-900">
      <span key={text} className={className} onClick={onClick}>
        {text}
      </span>
    </Link>
  );
};

const TabbedView = ({ children, ...props }) => {
  const history = useHistory();
  const { url: matchPath } = useRouteMatch();
  const tabPath = (path) => `${matchPath}${path === "/" ? "" : path}`;

  return (
    <>
      <div className="flex flex-row items-baseline border-b border-red-900 mb-4">
        {children.map(({ props }, i) => {
          const { title, path } = props;

          return (
            <div key={path}>
              <Title text={title} path={tabPath(path)} history={history} />
            </div>
          );
        })}
      </div>
      <Router history={history}>
        <Switch>
          {children.map((child) => (
            <Route
              key={child.props.path}
              path={tabPath(child.props.path)}
              exact
            >
              {child}
            </Route>
          ))}
        </Switch>
      </Router>
    </>
  );
};

export default TabbedView;

export { Tab };
