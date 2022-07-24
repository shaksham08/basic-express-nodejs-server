const express = require("express");

const messagesController = require("./controllers/messages.controller");
const friendsController = require("./controllers/friends.controller");

const app = express();

const PORT = 3001;

app.use(function (req, res, next) {
  const start = Date.now();
  next();
  // actions go here before sending back to the user
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

app.post("/friends", friendsController.postFriend);

app.get("/friends", friendsController.getFriends);

app.get("/friends/:id", friendsController.getFriend);

app.get("/messages", messagesController.getMessage);

app.post("/messages", messagesController.postMessage);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
