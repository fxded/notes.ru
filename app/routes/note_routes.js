// routes/note_routes.js
module.exports = function(app, db) {

    app.post ('/', function(req,res){
        req.on('data', function(data){
            console.log('requset: ', data.toString());
            res.send(data);
        });
        req.on('end', function(){
            console.log('end of requset');
            res.end();
        });
    });


    app.post('/notes', (req, res) => {
        req.on('data', function(data){
            console.log('requset: ', data.toString());
            //res.send(data);
            const   dataToNote = JSON.parse(data),
                    note = { text: dataToNote.nBody, title: dataToNote.nTitle };
                    
            db.collection('notes').insertOne(note, (err, result) => {
                if (err) {
                    //res.send({'error' : err}); 
                    console.log('bd_error: ', err);
                } else {
                    console.log('result of insert: ', result.ops[0]);
                    res.send(result.ops[0]);
                    res.end();
                }
            });
        });
        req.on('end', function(){
            console.log('end of requset');
            //res.end();
        });
    });
};
