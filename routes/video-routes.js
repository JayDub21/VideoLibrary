var db = require("../models");

module.exports = function (app) {
    // app.get("/api/posts", function (req, res) {
    //     var query = {};
    //     if (req.query.id) {
    //         query.Id = req.query.id;
    //     }
    //     // Here we add an "include" property to our options in our findAll query
    //     // We set the value to an array of the models we want to include in a left outer join
    //     // In this case, just db.Author
    //     db.Post.findAll({
    //         where: query,
    //     }).then(function (dbVideo) {
    //         res.json(dbVideo);
    //     });
    // });


    app.get("/api/videos", function (_, res) {
        var query = {};
        db.Video.findAll({
            where: query,
        }).then(function (dbVideo) {
            res.json(dbVideo);
        });
    });
};