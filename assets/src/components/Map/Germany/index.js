import Ruhr from "./Ruhr.js";
import Kiel from "./Kiel.js";
import Munich from "./Munich.js";
import Berlin from "./Berlin.js";
import Prussia from "./Prussia.js";
import Silesia from "./Silesia.js";

const Germany = {
  [Ruhr.properties.id]: Ruhr.properties.id,
  [Kiel.properties.id]: Kiel.properties.id,
  [Munich.properties.id]: Munich.properties.id,
  [Berlin.properties.id]: Berlin.properties.id,
  [Prussia.properties.id]: Prussia.properties.id,
  [Silesia.properties.id]: Silesia.properties.id,
};

export default Germany;
export { Ruhr, Kiel, Munich, Berlin, Prussia, Silesia };
