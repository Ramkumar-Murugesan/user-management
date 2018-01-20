var express = require("express");
var api = express.Router();
var routers = require("./routers")
api.use("/Noun_Default_Activity", routers.Noun_Default_ActivityRouter);
api.use("/Users",routers.usersRouter);
api.use("/authority",routers.authorityRouter);

module.exports = api;