const checkInputValdity = (lat1, lng1, lat2, lng2) => {
  if (isNaN(lat1) || isNaN(lng1) || isNaN(lat2) || isNaN(lng2)) {
    return {
      status: "Error",
      error: "Invalid Input. Coordinates Should be a Number.",
      latitude1: `${lat1} ${isNaN(lat1) ? "<- Error" : ""}`,
      longitude1: `${lng1} ${isNaN(lng1) ? "<- Error" : ""}`,
      latitude2: `${lat2} ${isNaN(lat2) ? "<- Error" : ""}`,
      longitude2: `${lng1} ${isNaN(lng1) ? "<- Error" : ""}`,
    };
  } else {
    if (
      lat1 < -90 ||
      lat1 > 90 ||
      lng1 < -180 ||
      lng1 > 180 ||
      lat2 < -90 ||
      lat2 > 90 ||
      lng2 < -180 ||
      lng2 > 180
    ) {
      return {
        status: "Error",
        error: "Latitude or Longitude not in valid Range",
        latitude1: `${lat1} ${lat1 < -90 || lat1 > 90 ? "<- Error" : ""}`,
        longitude1: `${lng1} ${lng1 < -180 || lng1 > 180 ? "<- Error" : ""}`,
        latitude2: `${lat2} ${lat2 < -90 || lat2 > 90 ? "<- Error" : ""}`,
        longitude2: `${lng1} ${lng2 < -180 || lng2 > 180 ? "<- Error" : ""}`,
      };
    }
  }
  return true;
};

module.exports = checkInputValdity;
