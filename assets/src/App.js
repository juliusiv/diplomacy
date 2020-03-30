import React, { useState } from 'react';
import ReactTooltip from "react-tooltip";
import './App.css';
import Map from './Map';

function App() {
  const [content, setContent] = useState("");
  const boardState = {}

  return (
    <div style={{width: 700, border: "1px solid black"}}>
      <Map setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}

export default App;
