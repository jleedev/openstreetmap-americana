var layerTunnelMotorwayLinkCasing = {
  id: "tunnel_motorway_link_casing",
  type: "line",
  paint: {
    "line-color": colorMotorwayTunnelCasing,
    "line-width": widthMotorwayLinkCasing,
    "line-opacity": 1,
    "line-dasharray": tunnelDashArray,
  },
  filter: [
    "all",
    ["==", "class", "motorway"],
    ["==", "ramp", 1],
    ["==", "brunnel", "tunnel"],
  ],
  layout: {
    "line-join": "round",
    visibility: "visible",
  },
  minzoom: minzoomMotorwayLink,
  source: "openmaptiles",
  metadata: {},
  "source-layer": "transportation",
};

var layerTunnelMotorwayCasing = {
  id: "tunnel_motorway_casing",
  type: "line",
  paint: {
    "line-color": colorMotorwayTunnelCasing,
    "line-width": widthMotorwayCasing,
    "line-dasharray": tunnelDashArray,
  },
  filter: [
    "all",
    ["==", "class", "motorway"],
    ["==", "brunnel", "tunnel"],
    ["!=", "ramp", 1],
  ],
  layout: {
    "line-join": "round",
    visibility: "visible",
  },
  minzoom: minzoomMotorway,
  source: "openmaptiles",
  metadata: {},
  "source-layer": "transportation",
};

var layerTunnelMotorwayLink = {
  id: "tunnel_motorway_link",
  type: "line",
  paint: {
    "line-color": colorMotorwayTunnel,
    "line-width": widthMotorwayLink,
  },
  filter: [
    "all",
    ["==", "class", "motorway"],
    ["==", "ramp", 1],
    ["==", "brunnel", "tunnel"],
  ],
  layout: {
    "line-join": "round",
    visibility: "visible",
  },
  minzoom: minzoomMotorwayLink,
  source: "openmaptiles",
  metadata: {},
  "source-layer": "transportation",
};

var layerTunnelMotorway = {
  id: "tunnel_motorway",
  type: "line",
  paint: {
    "line-color": colorMotorwayTunnel,
    "line-width": widthMotorway,
  },
  filter: [
    "all",
    ["==", "class", "motorway"],
    ["==", "brunnel", "tunnel"],
    ["!=", "ramp", 1],
  ],
  layout: {
    "line-join": "round",
    visibility: "visible",
  },
  minzoom: minzoomMotorway,
  source: "openmaptiles",
  metadata: {},
  "source-layer": "transportation",
};
var layerMotorwayCasing = {
  id: "road_motorway_casing",
  type: "line",
  paint: {
    "line-color": colorMotorwayCasing,
    "line-width": widthMotorwayCasing,
    "line-blur": 0.5,
  },
  filter: [
    "all",
    ["!in", "brunnel", "bridge", "tunnel"],
    ["==", "class", "motorway"],
    ["!=", "ramp", 1],
  ],
  layout: layoutRoadCasing,
  source: "openmaptiles",
  minzoom: minzoomMotorway,
  metadata: {},
  "source-layer": "transportation",
};
var layerTrunkCasing = {
  id: "road_trunk_casing",
  type: "line",
  paint: {
    "line-color": colorTrunkCasing,
    "line-width": widthTrunkCasing,
    "line-blur": 0.5,
  },
  filter: [
    "all",
    ["!in", "brunnel", "bridge", "tunnel"],
    ["==", "class", "trunk"],
    ["!=", "ramp", 1],
  ],
  layout: layoutRoadCasing,
  source: "openmaptiles",
  minzoom: minzoomTrunkCasing,
  metadata: {},
  "source-layer": "transportation",
};

var layerMotorwayLinkCasing = {
  id: "road_motorway_link_casing",
  type: "line",
  paint: {
    "line-color": colorMotorwayCasing,
    "line-width": widthMotorwayLinkCasing,
    "line-blur": 0.5,
  },
  filter: [
    "all",
    ["!in", "brunnel", "bridge", "tunnel"],
    ["==", "class", "motorway"],
    ["==", "ramp", 1],
  ],
  layout: layoutRoadCasing,
  source: "openmaptiles",
  minzoom: minzoomMotorwayLink,
  metadata: {},
  "source-layer": "transportation",
};
var layerTunnelMotorwayLinkCasing = {
  id: "tunnel_motorway_link_casing",
  type: "line",
  paint: {
    "line-color": colorMotorwayTunnelCasing,
    "line-width": widthMotorwayLinkCasing,
    "line-opacity": 1,
    "line-dasharray": tunnelDashArray,
  },
  filter: [
    "all",
    ["==", "class", "motorway"],
    ["==", "ramp", 1],
    ["==", "brunnel", "tunnel"],
  ],
  layout: {
    "line-join": "round",
    visibility: "visible",
  },
  minzoom: minzoomMotorwayLink,
  source: "openmaptiles",
  metadata: {},
  "source-layer": "transportation",
};

var layerTunnelMotorwayCasing = {
  id: "tunnel_motorway_casing",
  type: "line",
  paint: {
    "line-color": colorMotorwayTunnelCasing,
    "line-width": widthMotorwayCasing,
    "line-dasharray": tunnelDashArray,
  },
  filter: [
    "all",
    ["==", "class", "motorway"],
    ["==", "brunnel", "tunnel"],
    ["!=", "ramp", 1],
  ],
  layout: {
    "line-join": "round",
    visibility: "visible",
  },
  minzoom: minzoomMotorway,
  source: "openmaptiles",
  metadata: {},
  "source-layer": "transportation",
};
var layerBridgeMotorwayLinkCasing = {
  id: "bridge_motorway_link_casing",
  type: "line",
  paint: {
    "line-color": colorMotorwayCasingLowZoom.concat(
      minzoomBrunnel + 3,
      `hsl(${hueMotorway}, 71%, 10%)`
    ),
    "line-width": widthMotorwayLinkCasing,
    "line-blur": 0.5,
  },

  filter: [
    "all",
    ["==", "class", "motorway"],
    ["==", "ramp", 1],
    ["==", "brunnel", "bridge"],
  ],
  minzoom: minzoomMotorwayLink,
  layout: {
    "line-join": "round",
  },
  source: "openmaptiles",
  metadata: {},
  "source-layer": "transportation",
};

var layerBridgeTrunkLinkCasing = {
  id: "bridge_trunk_link_casing",
  type: "line",
  paint: {
    "line-color": "hsl(${hueTrunk}, 71%, 10%)",
    "line-width": widthTrunkLinkCasing,
    "line-blur": 0.5,
  },

  filter: [
    "all",
    ["==", "class", "trunk"],
    ["==", "ramp", 1],
    ["==", "brunnel", "bridge"],
  ],
  minzoom: minzoomTrunkLink,
  layout: {
    "line-join": "round",
  },
  source: "openmaptiles",
  metadata: {},
  "source-layer": "transportation",
};

var layerBridgeMotorwayCasing = {
  id: "bridge_motorway_casing",
  type: "line",
  paint: {
    "line-color": colorMotorwayBridgeCasing,
    "line-width": widthMotorwayCasing,
    "line-blur": 0.5,
  },
  filter: [
    "all",
    ["==", "class", "motorway"],
    ["==", "brunnel", "bridge"],
    ["!=", "ramp", 1],
  ],
  minzoom: minzoomMotorway,
  layout: {
    "line-join": "round",
  },
  source: "openmaptiles",
  metadata: {},
  "source-layer": "transportation",
};

var layerBridgeTrunkCasing = {
  id: "bridge_trunk_casing",
  type: "line",
  paint: {
    "line-color": colorBridgeCasing,
    "line-width": widthTrunkCasing,
    "line-blur": 0.5,
  },
  filter: [
    "all",
    ["==", "class", "trunk"],
    ["==", "brunnel", "bridge"],
    ["!=", "ramp", 1],
  ],
  minzoom: minzoomTrunkCasing,
  layout: {
    "line-join": "round",
  },
  source: "openmaptiles",
  metadata: {},
  "source-layer": "transportation",
};
