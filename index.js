function produceDrivingRange(blockRange) {
  return function(a,b) {
    // a is the start
    // b is the end
    // distance to travel = Math.abs(a - b)?

    let start = parseInt(a)
    let end = parseInt(b)
    let distanceToTravel = Math.abs(start - end)
    let difference = blockRange - distanceToTravel

    if (difference < 0) {
      return `${Math.abs(difference)} blocks out of range`
    } else {
      return `within range by ${difference}`
    };
  };
};

function produceTipCalculator(tip) {
  return function(cost) {
    return cost * tip
  }
}
