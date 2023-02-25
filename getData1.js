var express = require('express');
var app = express();
const path = require('path');
var bodyParser = require("body-parser");
let alert = require('alert'); 
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', function (req, res){
 res.sendFile(path.join(__dirname+'/index1.html'));
});
app.post('/submit-marks', function (req, res) {
    var name = req.body.sname;
    var mmarks=parseInt(req.body.mmarks);
    var smarks=parseInt(req.body.smarks);
    var cmarks=parseInt(req.body.cmarks);
    var marks=cmarks+smarks+mmarks;
    var maxmarks=0;
    if(mmarks>maxmarks) maxmarks=mmarks;
    if(smarks>maxmarks) maxmarks=smarks;
    if(cmarks>maxmarks) maxmarks=cmarks;
    var per=(marks/3).toFixed(2);
    res.send('Hey, '+name + ' <br>Your total marks are: '+marks+' <br>You got '+per+'% <br> Your maximum marks are: '+maxmarks);
alert('Hey, '+name + ' \nYour total marks are: '+marks+'\nYou got '+per+'% \nYour maximum marks are: '+maxmarks);
});
var server = app.listen(5000, function () {
    console.log('Node server is running..');
});