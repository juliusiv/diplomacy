import Finland from "./Finland.js";
import Livonia from "./Livonia.js";
import Warsaw from "./Warsaw.js";
import StPetersburg from "./StPetersburg.js";
import Ukraine from "./Ukraine.js";
import Sevastopol from "./Sevastopol.js";
import Moscow from "./Moscow.js";

const Russia = {
  [Finland.properties.id]: Finland.properties.id,
  [Livonia.properties.id]: Livonia.properties.id,
  [Warsaw.properties.id]: Warsaw.properties.id,
  [StPetersburg.properties.id]: StPetersburg.properties.id,
  [Ukraine.properties.id]: Ukraine.properties.id,
  [Sevastopol.properties.id]: Sevastopol.properties.id,
  [Moscow.properties.id]: Moscow.properties.id,
};

export default Russia;
export { Finland, Livonia, Warsaw, StPetersburg, Ukraine, Sevastopol, Moscow };
