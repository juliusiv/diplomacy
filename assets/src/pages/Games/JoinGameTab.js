import React, { useState } from "react";

import Button from "<diplomacy>/components/Button";
import TextInput from "<diplomacy>/components/TextInput";

const JoinGameTab = ({ ...props }) => {
  return (
    <div>
      <TextInput label="Game ID" placeholder={"ABC123"} className="mr-3 mb-3" />
      <Button>
        Join
      </Button>
    </div>
  )
}

export default JoinGameTab;
