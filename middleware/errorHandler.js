const { constants } = require("../constants");
const errorHandler = (err, req, res) => {
  const ststusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.NOT_FOUND:
      res.json({
        title: "Not Found",
        message: err.message,
        stackTree: err.stack,
      });

    case constants.SERVER_ERROR:
      res.json({
        title: "Not Found",
        message: err.message,
        stackTree: err.stack,
      });
    default:
      console.log("No Error");
  }
};
