import Naples from "./Naples.js";
import Rome from "./Rome.js";
import Tuscany from "./Tuscany.js";
import Apulia from "./Apulia.js";
import Venice from "./Venice.js";
import Piedmont from "./Piedmont.js";

const Italy = {
  [Naples.properties.id]: Naples.properties.id,
  [Rome.properties.id]: Rome.properties.id,
  [Tuscany.properties.id]: Tuscany.properties.id,
  [Apulia.properties.id]: Apulia.properties.id,
  [Venice.properties.id]: Venice.properties.id,
  [Piedmont.properties.id]: Piedmont.properties.id
}

export default Italy
export {
  Naples,
  Rome,
  Tuscany,
  Apulia,
  Venice,
  Piedmont
}
