var layerWaterway = {
  id: "waterway",
  type: "line",
  paint: {
    "line-color": colorWaterLine,
    "line-gap-width": [
      "match",
      ["get", "brunnel"],
      ["tunnel"],
      5,
      0,
    ],
    "line-opacity": [
      "case",
      ["in", ["get", "brunnel"], "tunnel"],
      0.25,
      1.0,
    ],
    "line-width": [
      "interpolate",
      ["exponential", 2],
      ["zoom"],
      9,
      ["match", ["get", "class"], ["river", "canal"], 0.5, 0.25],
      13,
      ["match", ["get", "class"], ["river", "canal"], 4, 0.5],
      17,
      ["match", ["get", "class"], ["river", "canal"], 5, 1],
      22,
      ["match", ["get", "class"], ["river", "canal"], 160, 64],
    ],
  },
  layout: {
    "line-cap": "round",
  },
  source: "openmaptiles",
  metadata: {},
  "source-layer": "waterway",
};

var layerWaterwayLabel = {
  id: "waterway_river_label",
  type: "symbol",
  paint: {
    "text-color": colorWaterText,
    "text-halo-color": "#fff",
    "text-halo-blur": 0.5,
    "text-halo-width": 2,
  },
  layout: {
    "text-font": [
      "match",
      ["get", "class"],
      ["river", "canal"],
      ["literal", ["Metropolis Bold Italic"]],
      ["literal", ["Metropolis Regular Italic"]],
    ],
    "text-offset": [0, -0.1],
    "text-size": [
      "interpolate",
      ["exponential", 2],
      ["zoom"],
      9,
      10,
      15,
      ["case", ["==", "river", ["get", "class"]], 14, 12],
      22,
      ["case", ["==", "river", ["get", "class"]], 48, 24],
    ],

    "text-field": "{name_int}",
    "text-max-angle": 85,
    "symbol-placement": "line",
  },
  source: "openmaptiles",
  "source-layer": "waterway",
};
