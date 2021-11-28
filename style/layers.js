/*
 This is a list of the layers in the Americana style, from bottom to top.  They're defined in the layer/ folder
*/
var americanaLayers = [];

americanaLayers.push(
  layerBackground,

  layerParkFill,

  layerBoundaryCountyBg,
  layerBoundaryStateBg,
  layerBoundaryCountryBg,

  layerWater,
  layerWaterway,

  layerParkOutline,

  layerBoundaryCity,
  layerBoundaryCounty,
  layerBoundaryState,
  layerBoundaryCountry,

  layerTunnelMotorwayCasing,
  layerTunnelTrunkCasing,
  layerTunnelMotorwayLinkCasing,
  layerTunnelTrunk,
  layerTunnelMotorway,
  layerTunnelTrunkLink,
  layerTunnelMotorwayLink,
  layerTunnelOneway,
  layerTunnelOnewayLink,

  layerTrunkCasing,
  layerMotorwayCasing,

  layerMotorwayLinkCasing,
  layerTrunk,
  layerMotorway,
  layerTrunkLink,
  layerMotorwayLink,
  layerRoadOneway,
  layerRoadOnewayLink
);

americanaLayers.push(
  {
    id: "landuse",
    source: "openmaptiles",
    "source-layer": "landuse",
    type: "fill",
    paint: {
      "fill-color": [
        "match",
        ["get", "class"],
        "residential",
        "#9f9",
        "commercial",
        "#99f",
        "retail",
        "#9ff",
        "industrial",
        "#ff9",
        "#f9f",
      ],
      "fill-opacity": 0.2,
    }
  },
  {
    id: "landcover",
    source: "openmaptiles",
    "source-layer": "landcover",
    type: "fill",
    paint: {
      "fill-color": [
        "match",
        ["get", "class"],
        "ice",
        "#eef",
        "#036",
      ],
      "fill-opacity": 0.2,
    }
  },
);

americanaLayers.push(
  // Labels covered by bridges
  layerWaterwayLabel
);

var bridgeLayers = [
  layerBridgeTrunkCasing,
  layerBridgeTrunkLinkCasing,
  layerBridgeTrunk,
  layerBridgeTrunkLink,
  layerBridgeMotorwayCasing,
  layerBridgeMotorwayLinkCasing,
  layerBridgeMotorway,
  layerBridgeMotorwayLink,
  layerBridgeOneway,
  layerBridgeOnewayLink,
];

//Render bridge without layer on the lowest bridge layer
bridgeLayers.forEach((layer) =>
  americanaLayers.push(filteredClone(layer, ["!has", "layer"], "_layer_bottom"))
);

//One layer at a time to handle stacked bridges
for (let i = 1; i <= 4; i++) {
  bridgeLayers.forEach((layer) =>
    americanaLayers.push(restrictLayer(layer, i))
  );
}

//If layer is more than 5, just give up and render on a single layer.
bridgeLayers.forEach((layer) =>
  americanaLayers.push(filteredClone(layer, [">=", "layer", 5], "_layer_top"))
);

americanaLayers.push(
  //The labels at the end of the list have the highest priority.

  layerMotorwayLabel,

  layerParkLabel,

  layerHighwayShieldInterstate,

  layerPlaceState,
  layerPlaceCity,
  layerPlaceCountryOther,
  layerPlaceCountry3,
  layerPlaceCountry2,
  layerPlaceCountry1,
  layerPlaceContinent
);

americanaLayers.push(
  {
    id: "transportation",
    source: "openmaptiles",
    "source-layer": "transportation",
    type: "line",
    paint: {
      "line-color": "#f0f",
      "line-width": 0.1,
    }
  },
  {
    id: "building",
    source: "openmaptiles",
    "source-layer": "building",
    type: "fill",
    paint: {
      "fill-color": "#000",
    }
  },
);
