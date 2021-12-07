function chart(methods) {
  let res = null;
  switch (methods) {
    case "GET":
      res = [30, 20, 45, 78, 25, 42];
      break;
    default:
      res = null;
  }
  return res;
}

module.exports = chart;
