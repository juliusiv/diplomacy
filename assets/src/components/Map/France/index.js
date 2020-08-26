import Paris from "./Paris.js";
import Brest from "./Brest.js";
import Picardy from "./Picardy.js";
import Burgundy from "./Burgundy.js";
import Gascony from "./Gascony.js";
import Marseilles from "./Marseilles.js";

const France = {
  [Paris.properties.id]: Paris.properties.id,
  [Brest.properties.id]: Brest.properties.id,
  [Picardy.properties.id]: Picardy.properties.id,
  [Burgundy.properties.id]: Burgundy.properties.id,
  [Gascony.properties.id]: Gascony.properties.id,
  [Marseilles.properties.id]: Marseilles.properties.id,
};

export default France;
export { Paris, Brest, Picardy, Burgundy, Gascony, Marseilles };
