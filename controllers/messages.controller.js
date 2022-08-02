const path = require("path");

function getMessage(req, res) {
  res.sendFile(path.join(__dirname, "..", "public", "node.png"));
}

function postMessage(req, res) {
  console.log("Updating Message");
  res.send("<h1>Message Updated!!!<h1/>");
}

module.exports = {
  getMessage,
  postMessage,
};
