import React, { useState } from "react";

import Button from "<diplomacy>/components/Button";
import Radio from "<diplomacy>/components/Radio";
import TextInput from "<diplomacy>/components/TextInput";

const CreateGameTab = ({ ...props }) => {
  return (
    <div>
      <form className="mb-3">
        <TextInput label="Name" placeholder={""} className="mb-3" />
        <div className="mb-3">
          <span className="font-bold">Phase Duration</span>
          <Radio
            options={["12 hours", "24 hours", "6 hours"]}
            name="phaseDuration"
            className="mt-1"
          />
        </div>
        <Button onClick={() => console.log("Create")}>Create</Button>
      </form>
    </div>
  );
};

export default CreateGameTab;
