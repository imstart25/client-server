/**
 * Main application routes
 */

'use strict';

module.exports = function(app) {
    app.use('/auth', require('./auth'));
    app.use('/api/users', require('./api/user'));
    app.use('/api/things', require('./api/thing'));
    app.use('/api/uploads', require('./api/upload'));
    app.use('/api/channels', require('./api/channel'));
    app.use('/api/messages', require('./api/message'));
    app.use('/api/turn', require('./api/turn'));
    app.use('/api/stories', require('./api/story'));
    app.use('/api/feedbacks', require('./api/feedback'));

    app.route('/:url(api|auth)/*')
        .get(function (req, res) {
            res.json({
                message: 'Hello!!!'
            })
        });

    app.route('/*')
        .get(function( req, res) {
            res.json({
                message: 'Hello!!!'
            })
        });
};
