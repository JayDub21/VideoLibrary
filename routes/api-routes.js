// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

var Wuphf = require("../models/wuphf.js");

module.exports = function (app) {
    // Using the passport.authenticate middleware with our local strategy.
    // If the user has valid login credentials, send them to the members page.
    // Otherwise the user will be sent an error
    app.post("/api/login", passport.authenticate("local"), function (req, res) {
        res.json(req.user);
    });

    // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
    // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
    // otherwise send back an error
    app.post("/api/signup", function (req, res) {
        db.User.create({
            email: req.body.email,
            password: req.body.password
        })
            .then(function () {
                res.redirect(307, "/api/login");
            })
            .catch(function (err) {
                res.status(401).json(err);
            });
    });

    // Route for logging user out
    app.get("/logout", function (req, res) {
        req.logout();
        res.redirect("/");
    });

    // Route for getting some data about our user to be used client side
    app.get("/api/user_data", function (req, res) {
        if (!req.user) {
            // The user is not logged in, send back an empty object
            res.json({});
        } else {
            // Otherwise send back the user's email and id
            // Sending back a password, even a hashed password, isn't a good idea
            res.json({
                email: req.user.email,
                id: req.user.id
            });
        }
    });
    app.get("/api/all", function (req, res) {
        // Finding all Wuphfs, and then returning them to the user as JSON.
        // Sequelize queries are asynchronous, which helps with perceived speed.
        // If we want something to be guaranteed to happen after the query, we'll use
        // the .then function
        Wuphf.findAll({}).then(function (results) {
            // results are available to us inside the .then
            res.json(results);
        });
    });
    // Add a wuphf
    app.post("/api/new", function (req, res) {
        console.log("Wuphf Data:");
        console.log(req.body);
        Wuphf.create({
            body: req.body.body,
            created_at: req.body.created_at
        }).then(function () {
            res.end();
        });
    });
};