const model = require("../models/friends.model");

function postFriend(req, res) {
  if (!req.body.name) {
    res.status(400).json({
      message: "Missing friends Name",
    });
    return;
  }
  const newFriend = {
    name: req.body.name,
    id: model.length,
  };
  model.push(newFriend);
  res.json(newFriend);
}

function getFriends(req, res) {
  res.json(model);
}

function getFriend(req, res) {
  const { friendId } = req.params;
  const friend = model[friendId];
  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json({
      message: `No friend found with the id : ${friendId}`,
    });
  }
}

module.exports = {
  postFriend,
  getFriends,
  getFriend,
};
