import React, { useState } from "react";

import A from "<diplomacy>/components/A";
import Button from "<diplomacy>/components/Button";
import PageContainer, { Pages } from "<diplomacy>/containers/PageContainer";
import TextInput from "<diplomacy>/components/TextInput";
import Axios from "<diplomacy>/utils/axios";
import { Redirect } from "react-router-dom";

const StatusToError = {
  409: "That email isn't available. Please choose a different one.",
};

const Signup = ({ ...props }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState(undefined);

  const makeSignUpRequest = (email, password) => {
    Axios.post("/api/users/register", { user: { email, password } })
      .then((response) => {
        console.log(response);
        <Redirect to="/account" />;
      })
      .catch((err) => {
        const status = err.response.status;
        setErrorText(StatusToError[status]);
      });
  };

  return (
    <PageContainer page={Pages.Signup} requiresAuth={false}>
      <div className="flex flex-col w-full h-full items-center mt-6 pt-6">
        <h1 className="text-5xl font-copperplate mb-8">
          Sign up for Diplomacy
        </h1>

        <form className="flex flex-col w-4/12 items-center" action={undefined}>
          <TextInput
            value={email}
            label="Email"
            onChange={setEmail}
            type="email"
            className="mb-3 w-full"
          />
          <TextInput
            value={password}
            label="Password"
            onChange={setPassword}
            type="password"
            className="w-full"
          />

          {errorText && (
            <div className="bg-red-200 border border-red-900 text-red-900 rounded-sm w-full mt-4 p-3 text-center">
              {errorText}
            </div>
          )}

          <Button
            className="w-full text-center mb-4 mt-10"
            onClick={(e) => {
              e.preventDefault();
              makeSignUpRequest(email, password);
            }}
          >
            Sign up
          </Button>

          <div className="w-full text-center">
            <A href="/login">Have an account? Log in here</A>
          </div>
        </form>
      </div>
    </PageContainer>
  );
};

export default Signup;
