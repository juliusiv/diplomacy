import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import PageContainer, { Pages } from "<diplomacy>/containers/PageContainer";
import Button from "<diplomacy>/components/Button";
import Axios from "<diplomacy>/utils/axios";

const Account = ({ ...props }) => {
  const [redirect, setRedirect] = useState(undefined);

  const makeLogOutRequest = () => {
    Axios.delete("/api/users/log_out").then((response) => {
      console.log(response);
      setRedirect("/login");
    });
  };

  if (redirect !== undefined) return <Redirect to={redirect} />;

  return (
    <PageContainer page={Pages.Account}>
      <div>Account</div>
      <Button
        className="w-full text-center mb-4 mt-10"
        onClick={(e) => {
          e.preventDefault();
          makeLogOutRequest();
        }}
      >
        Log out
      </Button>
    </PageContainer>
  );
};

export default Account;
