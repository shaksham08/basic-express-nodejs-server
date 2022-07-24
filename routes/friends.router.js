const express = require("express");

const friendsController = require("../controllers/friends.controller");

const friendsRouter = express.Router();

// Add middleware to that just router
friendsRouter.use((req, res, next) => {
  console.log("ip address:", req.ip);
  next();
});
friendsRouter.post("/", friendsController.postFriend);
friendsRouter.get("/", friendsController.getFriends);
friendsRouter.get("/:friendId", friendsController.getFriend);

module.exports = friendsRouter;
