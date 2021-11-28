var layerWaterIntermittent = {
  id: "water_intermittent",
  type: "fill",
  paint: {
    "fill-color": colorWaterIntermittent,
    "fill-opacity": 0.85,
  },
  filter: ["all", ["==", "intermittent", 1]],
  layout: {
    visibility: "visible",
  },
  source: "openmaptiles",
  metadata: {},
  "source-layer": "water",
};

var layerWater = {
  id: "water",
  type: "fill",
  paint: {
    "fill-color": colorWaterFill,
  },
  filter: ["all", ["!=", "intermittent", 1], ["!=", "brunnel", "tunnel"]],
  layout: {
    visibility: "visible",
  },
  source: "openmaptiles",
  metadata: {},
  "source-layer": "water",
};
