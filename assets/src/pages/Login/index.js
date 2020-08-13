import React from "react";

import A from "<diplomacy>/components/A";
import Button from "<diplomacy>/components/Button";
import PageContainer, { Pages } from "<diplomacy>/containers/PageContainer";
import TextInput from "<diplomacy>/components/TextInput";

const Login = ({ ...props }) => {
  return (
    <PageContainer page={Pages.Login}>
      <div className="flex flex-col w-full h-full items-center mt-6 pt-6">
        <h1 className="text-5xl font-copperplate mb-8">Sign in to Diplomacy</h1>

        <form className="flex flex-col w-4/12 items-center">
          <TextInput label="Email" placeholder={""} type="email" className="mb-3 w-full" />
          <TextInput label="Password" placeholder={""} type="password" className="mb-10 w-full" />
          
          <Button className="w-full text-center mb-4" onClick={() => console.log("logging in")}>
            Log in
          </Button>

          <div className="w-full text-center">
            <A href="/signup">No account? Sign up here</A>
          </div>
        </form>
      </div>
    </PageContainer>
  )
}

export default Login
