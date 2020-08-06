import React from "react";
import Navigation from "./Navigation";

const PageContainer = ({ page, children, withNavigation = true, ...props }) => {
  return (
    <div className="h-full bg-gray-300 flex flex-col text-black overflow-auto w-full">
      <div className="flex flex-col items-center h-full" {...props}>
        {
          withNavigation && <Navigation active={page} />
        }
        <div className="pt-4 w-9/12">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageContainer;
