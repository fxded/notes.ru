// routes/note_routes.js
module.exports = function(app, db) {
    app.post('/notes', (req, res) => {
        res.send('Hello');
        //console.log(req);
    });
};
