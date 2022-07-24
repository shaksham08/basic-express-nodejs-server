const express = require("express");

const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");

const app = express();

const PORT = 3001;

app.use(function (req, res, next) {
  const start = Date.now();
  next();
  // actions go here before sending back to the user
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use(express.json());

app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
