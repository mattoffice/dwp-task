const distance = require("./lib/distance-calculator");
const convertedDistance = require("./lib/distance-convertor");
const checkInputValidity = require("./lib/check-input-validity.js");

function calculateDistance(point1, point2, units = "km") {
  const { lat: lat1, lng: lng1 } = point1;
  const { lat: lat2, lng: lng2 } = point2;

  checkResult = checkInputValidity(lat1, lng1, lat2, lng2);

  if (typeof checkResult === "object") return checkResult;

  distanceInKm = distance(lat1, lng1, lat2, lng2);

  return units === ("" || "km" || undefined || null)
    ? {distance:distanceInKm, unit:"km"}
    : convertedDistance(distanceInKm, units);
}

module.exports = calculateDistance;
