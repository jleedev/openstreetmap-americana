"use strict";

import * as Color from "../constants/color.js";

const bigRivers = ["river", "canal"];
const mediumRivers = ["stream"];

export const waterway = {
  id: "waterway",
  type: "line",
  source: "openmaptiles",
  "source-layer": "waterway",
  layout: {
    "line-join": "round",
    "line-cap": "round",
  },
  paint: {
    "line-color": Color.waterFill,
    "line-width": [
      "interpolate",
      ["exponential", 2],
      ["zoom"],
      3, 0.5,
      16, [
        "case",
        ["in", ["get", "class"], ["literal", bigRivers]],
        10,
        ["in", ["get", "class"], ["literal", mediumRivers]],
        8,
        2,
      ],
    ],
    "line-opacity": [
      "case",
      ["==", ["get", "brunnel"], "tunnel"],
      0.3,
      1,
    ],
  },
};

export const water = {
  id: "water",
  type: "fill",
  paint: {
    "fill-color": Color.waterFill,
    "fill-opacity": [
      "case",
      [
        "any",
        ["==", ["get", "intermittent"], 1],
        ["==", ["get", "brunnel"], "tunnel"],
      ],
      0.3,
      1,
    ],
  },
  layout: {
    visibility: "visible",
  },
  source: "openmaptiles",
  metadata: {},
  "source-layer": "water",
};

export const waterwayLabel = {
  id: "waterway_label",
  type: "symbol",
  source: "openmaptiles",
  "source-layer": "waterway",
  filter: [
    "!=", "brunnel", "tunnel",
  ],
  layout: {
    "symbol-placement": "line",
    "text-field": ["get", "name"],
    "text-font": ["Metropolis Extra Bold Italic"],
    "text-size": [
      "interpolate",
      ["exponential", 2],
      ["zoom"],
      3, 8,
      12, [
        "case",
        ["in", ["get", "class"], ["literal", bigRivers]],
        14,
        10,
      ],
      20, [
        "case",
        ["in", ["get", "class"], ["literal", bigRivers]],
        40,
        ["in", ["get", "class"], ["literal", mediumRivers]],
        20,
        15,
      ],
    ],
    "text-max-angle": 55,
    "text-letter-spacing": 0.15,
    "text-allow-overlap": [
      "step",
      ["zoom"],
      false,
      15,
      true,
    ],
  },
  paint: {
    "text-halo-color": "hsla(0, 0, 100%, 1)",
    "text-color": "hsla(211, 43%, 28%, 1)",
    "text-halo-width": 0.75,
    "text-halo-blur": 0.25,
  }
};

export const waterLabel = {
  id: "water_label",
  type: "symbol",
  source: "openmaptiles",
  "source-layer": "water_name",
  layout: {
    "symbol-placement": "line",
    "text-field": ["get", "name"],
    "text-font": ["Metropolis Extra Bold Italic"],
    "text-size": [
      "interpolate",
      ["exponential", 2],
      ["zoom"],
      3, 8,
      12, 10,
      20, 40,
    ],
    "text-max-angle": 45,
    "text-letter-spacing": 0.25,
  },
  paint: {
    "text-halo-color": "hsla(0, 0, 100%, 1)",
    "text-color": "hsla(211, 43%, 28%, 1)",
    "text-halo-width": 0.75,
    "text-halo-blur": 0.25,
  }
};
