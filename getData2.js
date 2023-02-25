var express = require('express');
var app = express();
const path = require('path');
var bodyParser = require("body-parser");
let alert = require('alert'); 
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', function (req, res){
 res.sendFile(path.join(__dirname+'/profile.html'));
});
app.post('/profile-submission', function (req, res) {
    var name = req.body.sname;
    var email=req.body.email;
    var desg=req.body.desg;
    var remarks=req.body.remarks;

alert("Profile Details\nName: "+name+"\nEmail: "+email+"\nDesignation: "+desg+"\nRemarks: "+remarks);
});
var server = app.listen(5000, function () {
    console.log('Node server is running..');
});