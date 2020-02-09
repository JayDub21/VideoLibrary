var db = require("../models");
var io = require("socket.io");

module.exports = function (app) {

    app.get("/api/wuphfs", function (_, res) {
        var query = {};
        db.Wuphf.findAll({
            where: query,
        }).then(function (messageData) {
            res.json(messageData);
        });
    });

    // io.on("connection", function (socket) {
    //     // This is the socket for each User
    //     console.log("User connected", socket.id);
    // })

};

