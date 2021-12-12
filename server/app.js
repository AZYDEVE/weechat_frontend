const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const http = require("http");
const stompit = require("stompit");
const WebSocket = require("ws");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server: server });

let client = stompit.connect({ host: "localhost", port: 61613 });

let subscription_message = null;

// websocket connecting to the client
wss.on("connection", function connection(ws) {
  console.log("react web-socket is connected");

  // when receive new topic from the client, change the subscribe topic
  ws.on("message", function incoming(message) {
    let messageObj = JSON.parse(message);

    console.log(messageObj);
    if (messageObj.type === "newchat") {
      subscribeToGetNewChatRoom(Buffer.from(messageObj.body), ws);
    } else if (messageObj.type === "change_mqport") {
      //frontEnd Notifies change mq port

      client = stompit.connect({ host: "localhost", port: messageObj.body });
    } else {
      if (subscription_message !== null) {
        subscription_message.unsubscribe();
      }
      console.log(messageObj.body);
      subscribeToChatTopic(Buffer.from(messageObj.body), ws);
    }
  });
});

// a function for connecting ActiveMQ. When receive a new message, forward it to the client
const subscribeToChatTopic = (topic, ws) => {
  subscription_message = client.subscribe(
    { destination: `/topic/${topic}` },
    (err, msg) => {
      msg.readString("UTF-8", (err, body) => {
        console.log(body);
        ws.send(body);
      });
    }
  );
};

const subscribeToGetNewChatRoom = (topic, ws) => {
  subscription_message = client.subscribe(
    { destination: `/topic/${topic}` },
    (err, msg) => {
      msg.readString("UTF-8", (err, body) => {
        ws.send(body);
      });
    }
  );
};

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = { app: app, server: server };
