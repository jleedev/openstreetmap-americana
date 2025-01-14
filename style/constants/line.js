var layoutRoad = {
  "line-cap": "round",
  "line-join": "round",
  visibility: "visible",
};
var layoutRoadCasing = {
  "line-cap": "butt",
  "line-join": "round",
  visibility: "visible",
};
var widthMotorway = {
  base: 1.2,
  stops: [
    [4, 0.5],
    [9, 1],
    [20, 18],
  ],
};
var widthTrunk = widthMotorway;
var widthMotorwayCasing = {
  base: 1.2,
  stops: [
    [4, 1.5],
    [9, 3],
    [20, 22],
  ],
};
var widthTrunkCasing = {
  base: 1.2,
  stops: [
    [12, 0],
    [13, 5],
    [20, 22],
  ],
};

var minzoomMotorway = 4;
var minzoomTrunk = 8;
var widthMotorwayLink = {
  base: 1.2,
  stops: [
    [7, 1],
    [13, 1.5],
    [14, 2.5],
    [20, 11.5],
  ],
};
var widthTrunkLink = widthMotorwayLink;
var widthMotorwayLinkCasing = {
  base: 1.2,
  stops: [
    [7, 2],
    [13, 3],
    [14, 4],
    [20, 15],
  ],
};
var widthTrunkLinkCasing = widthMotorwayLinkCasing;
var minzoomMotorwayLink = 7;
var minzoomTrunkLink = 10;
var minzoomTrunkCasing = 11;
