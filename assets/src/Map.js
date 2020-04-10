import React, { memo } from "react";
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
  ENGLAND,
  GERMANY,
  FRANCE,
  ITALY,
  AUSTRIA,
  RUSSIA,
  TURKEY,
  OCEANS,
  UNOCCUPIED,
  NEUTRAL
} from "./provinces"

const COLORS = {
  ENGLAND: "orange",
  GERMANY: "yellow",
  FRANCE: "steelblue",
  ITALY: "green",
  AUSTRIA: "pink",
  RUSSIA: "mediumorchid",
  TURKEY: "cyan",
  OCEANS: "lightcyan",
  UNOCCUPIED: "beige",
  NEUTRAL: "url('#neutral-lines')"
  // NEUTRAL: "dimgrey"
}

const getProvinceColor = provinceId => {
  if (ENGLAND.hasOwnProperty(provinceId)) return COLORS.ENGLAND
  if (GERMANY.hasOwnProperty(provinceId)) return COLORS.GERMANY
  if (FRANCE.hasOwnProperty(provinceId)) return COLORS.FRANCE
  if (ITALY.hasOwnProperty(provinceId)) return COLORS.ITALY
  if (AUSTRIA.hasOwnProperty(provinceId)) return COLORS.AUSTRIA
  if (RUSSIA.hasOwnProperty(provinceId)) return COLORS.RUSSIA
  if (TURKEY.hasOwnProperty(provinceId)) return COLORS.TURKEY
  if (OCEANS.hasOwnProperty(provinceId)) return COLORS.OCEANS
  if (UNOCCUPIED.hasOwnProperty(provinceId)) return COLORS.UNOCCUPIED
  if (NEUTRAL.hasOwnProperty(provinceId)) return COLORS.NEUTRAL

  return "ffffffff"
}

const MapChart = ({ setTooltipContent, boardState, sizeRatio = 1.0 }) => {
  const topo = topojson.topology([geo]);

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
          backgroundColor: COLORS.OCEANS
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

export default memo(MapChart);
