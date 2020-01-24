const   port        = process.env.PORT || 3003,
        express     = require('express'),
        MongoClient = require('mongodb').MongoClient,
        bodyParser  = require('body-parser');
        app         = express();
        
        
//    io = socket.listen(app.listen(port));
app.listen(port, () => {
    console.log('Listen on ' + port + ' dir ' + __dirname);
});

app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
    res.sendfile('index.html');
});

app.post ('/', function(req,res){
    req.on('data', function(data){
        console.log('requset: ', data.toString());   
        res.write('Write: '+ data.toString());
    });
    req.on('end', function(){
        console.log('the end ');
        res.end();
    });
});
