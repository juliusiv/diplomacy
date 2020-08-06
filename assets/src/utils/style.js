import React from "react";
// Not sure why this needs to be a relative import instead of <diplomacy>/App.css, but it does...
import styles from "../App.css";

const b = ([text, raw]) => <span className="font-bold">{text}</span>
const i = ([text, raw]) => <span className="font-italic">{text}</span>

export { b, i }
