function getMessage(req, res) {
  res.send("<h1>Hello!!!<h1/>");
}

function postMessage(req, res) {
  console.log("Updating Message");
  res.send("<h1>Message Updated!!!<h1/>");
}

module.exports = {
  getMessage,
  postMessage,
};
