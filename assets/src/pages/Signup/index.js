import React from "react";

import A from "<diplomacy>/components/A";
import Button from "<diplomacy>/components/Button";
import PageContainer, { Pages } from "<diplomacy>/containers/PageContainer";
import TextInput from "<diplomacy>/components/TextInput";

const Signup = ({ ...props }) => {
  return (
    <PageContainer page={Pages.Signup}>
      <div className="flex flex-col w-full h-full items-center mt-6 pt-6">
        <h1 className="text-5xl font-copperplate mb-8">Sign up for Diplomacy</h1>

        <form className="flex flex-col w-4/12 items-center">
          <TextInput label="Email" placeholder={""} type="email" className="mb-3 w-full" />
          <TextInput label="Password" placeholder={""} type="password" className="mb-10 w-full" />
          
          <Button className="w-full text-center mb-4" onClick={() => console.log("logging in")}>
            Sign up
          </Button>

          <div className="w-full text-center">
            <A href="/login">Have an account? Log in here</A>
          </div>
        </form>
      </div>
    </PageContainer>
  )
}

export default Signup
