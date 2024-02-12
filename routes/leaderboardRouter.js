const express = require('express');
const leaderboardRouter = express.Router(); // set up module router

// configure endpoint for <path to router>/
leaderboardRouter.route(
    '/'
).all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
}).get((req, res) => {
    res.end('/leaderboards GET');
}).post((req, res) => {
    res.end('/leaderboards POST');
}).put((req, res) => {
    res.end('/leaderboards PUT');
}).delete((req, res) => {
    res.end('/leaderboards DELETE');
});

leaderboardRouter.route(
    '/:categoryName'
).all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
}).get((req, res) => {
    res.end(`/leaderboards/${req.params.categoryName} GET`);
}).post((req, res) => {
    res.end(`/leaderboards/${req.params.categoryName} POST`);
}).put((req, res) => {
    res.end(`/leaderboards/${req.params.categoryName} PUT`);
}).delete((req, res) => {
    res.end(`/leaderboards/${req.params.categoryName} DELETE`);
});

leaderboardRouter.route(
    '/:categoryName/:userId'
).all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
}).get((req, res) => {
    res.end(`/leaderboards/${req.params.categoryName}/${req.params.userId} GET`);
}).post((req, res) => {
    res.end(`/leaderboards/${req.params.categoryName}/${req.params.userId} POST`);
}).put((req, res) => {
    res.end(`/leaderboards/${req.params.categoryName}/${req.params.userId} PUT`);
}).delete((req, res) => {
    res.end(`/leaderboards/${req.params.categoryName}/${req.params.userId} DELETE`);
});

module.exports = leaderboardRouter;
