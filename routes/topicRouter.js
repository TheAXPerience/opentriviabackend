const express = require('express');
const topicRouter = express.Router(); // set up module router

// configure endpoint for <path to router>/
topicRouter.route(
    '/'
).all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
}).get((req, res) => {
    res.end('/topics GET');
}).post((req, res) => {
    res.end('/topics POST');
}).put((req, res) => {
    res.end('/topics PUT');
}).delete((req, res) => {
    res.end('/topics DELETE');
});

topicRouter.route(
    '/:topicId'
).all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
}).get((req, res) => {
    res.end(`/topics/${req.params.topicId} GET`);
}).post((req, res) => {
    res.end(`/topics/${req.params.topicId} POST`);
}).put((req, res) => {
    res.end(`/topics/${req.params.topicId} PUT`);
}).delete((req, res) => {
    res.end(`/topics/${req.params.topicId} DELETE`);
});

topicRouter.route(
    '/:topicId/:messageId'
).all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
}).get((req, res) => {
    res.end(`/topics/${req.params.topicId}/${req.params.messageId} GET`);
}).post((req, res) => {
    res.end(`/topics/${req.params.topicId}/${req.params.messageId} POST`);
}).put((req, res) => {
    res.end(`/topics/${req.params.topicId}/${req.params.messageId} PUT`);
}).delete((req, res) => {
    res.end(`/topics/${req.params.topicId}/${req.params.messageId} DELETE`);
});

module.exports = topicRouter;
