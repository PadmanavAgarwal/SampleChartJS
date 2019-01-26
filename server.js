const express = require('express');
const app = express();
http = require('http'),
httpServer = http.Server(app);
app.use(express.static('./views/images'));
app.use(express.static('./views/js'));
app.set('view engine', 'ejs');
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname));

app.get('/', function(req, res) {
    let data = {
        chartData: JSON.stringify([12, 19, 3, 5, 2, 3])
    }
    res.render('pages/index', data);
});

var port = 8080;
app.listen(8080, function(err){
    if(typeof(err) == "undefined"){
        console.log("Your application is up and running on port number "+port);
    }else{
        console.log("Your application is down due to : "+err);
    }
});