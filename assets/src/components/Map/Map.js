import React, { memo, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import { PatternLines } from "@vx/pattern";
import * as topojson from "topojson-server"

// import topo from "./topo.json"
import Geo from "./Geo.js"
import Austria, * as AustrianProvinces from "./Austria"
import England, * as EnglishProvinces from "./England"
import France, * as FrenchProvinces from "./France"
import Neutral, * as NeutralProvinces from "./Neutral"
import Russia, * as RussianProvinces from "./Russia"
import Unoccupied, * as UnoccupiedProvinces from "./Unoccupied"
import {
  Germany,
  Italy,
  Turkey,
  Oceans,
} from "./Provinces"

const Colors = {
  England: "orange",
  Germany: "yellow",
  France: "steelblue",
  Italy: "green",
  Austria: "pink",
  Russia: "mediumorchid",
  Turkey: "cyan",
  Oceans: "lightcyan",
  Unoccupied: "beige",
  Neutral: "url('#neutral-lines')"
}

const getProvinceColor = provinceId => {
  if (England.hasOwnProperty(provinceId)) return Colors.England
  if (Germany.hasOwnProperty(provinceId)) return Colors.Germany
  if (France.hasOwnProperty(provinceId)) return Colors.France
  if (Italy.hasOwnProperty(provinceId)) return Colors.Italy
  if (Austria.hasOwnProperty(provinceId)) return Colors.Austria
  if (Russia.hasOwnProperty(provinceId)) return Colors.Russia
  if (Turkey.hasOwnProperty(provinceId)) return Colors.Turkey
  if (Oceans.hasOwnProperty(provinceId)) return Colors.Oceans
  if (Unoccupied.hasOwnProperty(provinceId)) return Colors.Unoccupied
  if (Neutral.hasOwnProperty(provinceId)) return Colors.Neutral

  return "ffffffff"
}

const Map = ({ setTooltipContent, boardState, setBoardState, sizeRatio = 1.0 }) => {
  Geo.features = Geo.features.concat(Object.values(AustrianProvinces))
  Geo.features = Geo.features.concat(Object.values(EnglishProvinces))
  Geo.features = Geo.features.concat(Object.values(FrenchProvinces))
  Geo.features = Geo.features.concat(Object.values(NeutralProvinces))
  Geo.features = Geo.features.concat(Object.values(RussianProvinces))
  Geo.features = Geo.features.concat(Object.values(UnoccupiedProvinces))
  const topo = topojson.topology([Geo]);
  const [board, setBoard] = useState(boardState)

  return (
    <>
      <ComposableMap
        data-tip=""
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [-17.0, -53.5, 0],
          scale: 900
        }}
        width={700 * sizeRatio}
        height={600 * sizeRatio}
        style={{
          backgroundColor: Colors.Oceans
        }}
      >
        <PatternLines
          id="neutral-lines"
          height={6}
          width={6}
          stroke="black"
          strokeWidth={1}
          background="darkslategrey"
          orientation={["diagonal"]}
        />
        <Geographies geography={topo}>
          {({ geographies }) =>
            geographies.map(geo => {
              const { name, id } = geo.properties;
              const color = getProvinceColor(id)
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  stroke="darkslategrey"
                  onMouseEnter={() => setTooltipContent(name)}
                  onMouseLeave={() => setTooltipContent("")}
                  style={{
                    default: {
                      fill: color,
                      outline: "none"
                    },
                    hover: {
                      fill: color,
                      outline: "none",
                      cursor: "pointer",
                      strokeWidth: 2
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
                />
              )
            })
          }
        </Geographies>
      </ComposableMap>
    </>
  );
};

export default Map;
// export default memo(Map);
