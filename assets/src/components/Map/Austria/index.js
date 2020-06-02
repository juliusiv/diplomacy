import Bohemia from "./Bohemia.js";
import Trieste from "./Trieste.js";
import Tyrolia from "./Tyrolia.js";
import Vienna from "./Vienna.js";
import Budapest from "./Budapest.js";
import Galicia from "./Galicia.js";

const Austria = {
  [Bohemia.properties.id]: Bohemia.properties.id,
  [Trieste.properties.id]: Trieste.properties.id,
  [Tyrolia.properties.id]: Tyrolia.properties.id,
  [Vienna.properties.id]: Vienna.properties.id,
  [Budapest.properties.id]: Budapest.properties.id,
  [Galicia.properties.id]: Galicia.properties.id
}

export default Austria
export {
  Bohemia,
  Trieste,
  Tyrolia,
  Vienna,
  Budapest,
  Galicia
}
