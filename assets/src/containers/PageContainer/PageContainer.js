import React from "react";
import Cookies from "js-cookie";
import Navigation from "./Navigation";
import { Redirect } from "react-router-dom";

const DiplomacySessionKey = "_diplomacy_key";

const PageContainer = ({
  page,
  children,
  withNavigation = true,
  requiresAuth = true,
  ...props
}) => {
  const sessionKey = Cookies.get(DiplomacySessionKey);
  const isAuthed = sessionKey !== undefined;

  if (requiresAuth && !isAuthed) return <Redirect to="/login" />;

  return (
    <div className="h-full bg-gray-300 flex flex-col text-gray-900 overflow-auto w-full">
      <div className="flex flex-col items-center h-full" {...props}>
        {withNavigation && <Navigation active={page} />}
        <div className="pt-4 w-8/12 h-full">{children}</div>
      </div>
    </div>
  );
};

export default PageContainer;
