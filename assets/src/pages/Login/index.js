import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import A from "<diplomacy>/components/A";
import Button from "<diplomacy>/components/Button";
import PageContainer, { Pages } from "<diplomacy>/containers/PageContainer";
import TextInput from "<diplomacy>/components/TextInput";
import Axios from "<diplomacy>/utils/axios";

const StatusToError = {
  400: "That email and password combination doesn't match.",
};

const Login = ({ ...props }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState(undefined);
  const [redirect, setRedirect] = useState(undefined);

  const makeLogInRequest = (email, password) => {
    Axios.post("/api/users/register", { user: { email, password } })
      .then((_response) => {
        setRedirect("/account");
      })
      .catch((err) => {
        const status = err.response.status;
        setErrorText(StatusToError[status]);
      });
  };

  if (redirect !== undefined) return <Redirect to={redirect} />;

  return (
    <PageContainer page={Pages.Login} requiresAuth={false}>
      <div className="flex flex-col w-full h-full items-center mt-6 pt-6">
        <h1 className="text-5xl font-copperplate mb-8">Log in to Diplomacy</h1>

        <form className="flex flex-col w-4/12 items-center">
          <TextInput
            label="Email"
            onChange={setEmail}
            type="email"
            className="mb-3 w-full"
          />
          <TextInput
            label="Password"
            onChange={setPassword}
            type="password"
            className="mb-10 w-full"
          />

          {errorText && (
            <div className="bg-red-200 border border-red-900 text-red-900 rounded-sm w-full mt-4 p-3 text-center">
              {errorText}
            </div>
          )}

          <Button
            className="w-full text-center mb-4"
            onClick={(e) => {
              e.preventDefault();
              makeLogInRequest(email, password);
            }}
          >
            Log in
          </Button>

          <div className="w-full text-center">
            <A href="/signup">No account? Sign up here</A>
          </div>
        </form>
      </div>
    </PageContainer>
  );
};

export default Login;
