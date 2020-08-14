const distanceConvertor = (distance, unit) => {
  switch (unit) {
    case "m":
      return { distance: distance * 1000, unit: "m" };
      break;
    case "mile":
      return { distance: distance * 0.621371, unit: "mile" };
      break;
    case "yard":
      return { distance: distance * 1093.61, unit: "yards" };
      break;
    case "foot":
      return { distance: distance * 3280.83, unit: "foot" };
      break;
    case "n-mile":
      return { distance: distance * 0.539955174946, unit: "nautical-mile" };
      break;
    default:
      return { distance: distance, unit: "km" };
  }
};

module.exports = distanceConvertor;
