import React, { memo, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import { PatternLines } from "@vx/pattern";
import * as topojson from "topojson-server"

// import topo from "./topo.json"
import geo from "./geo.json"
import {
  England,
  Germany,
  France,
  Italy,
  Austria,
  Russia,
  Turkey,
  Oceans,
  Unoccupied,
  Neutral
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
  const topo = topojson.topology([geo]);
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
