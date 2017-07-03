const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const DEFAULT_PORT = 3000;

var open = require('open');


//open('http://localhost:3000','chrome');


var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/myDb');

var connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error:'));



app.use(express.static(path.join(__dirname, '/')));
app.use(express.static(path.join(__dirname, './app')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
    res.sendFile('index.html');
});


app.get('/folders_list', function(req, res) {

    //console.log("entered");
    connection.db.collection("folders_list", function(err, collection) {
        collection.find({}).toArray(function(err, data) {
            res.json(data);
        });
    });

});


app.post('/folders_list', function(req, res) {
    let new_folder = req.body;

    //console.log(files);

    connection.db.collection("folders_list").insert(new_folder, function(err, data) {
        res.json(new_folder);
    });
});




app.get('/folder_data', function(req, res) {
    let folder_name = req.param('folder_name');

    connection.db.collection("folders_list").findOne({ folder_name: folder_name }, function(err, data) {
        res.json(data);
    });
});



app.post('/folder_data', function(req, res) {
    let folder_name = req.body.folder_name;
    let files = req.body.files;
    connection.db.collection("folders_list").update({ folder_name: folder_name }, { $set: { 'files': files } },
        function(err, data) {
            res.send({ 'status': 'Record Updated' });
        });
});


app.delete('/folder_list', function(req, res) {
    let folder_name = req.param('folder_name');
    connection.db.collection("folders_list").remove({ folder_name: folder_name }, function(err, data) {
        res.send({ 'status': 200 });
    });
});

app.post('/component_data', function(req, res) {
    let folder_name = req.body.name;
    let component_data = req.body.finalStructures;
    let id = req.body.name;


    connection.db.collection("component_data").save({ _id: id ,name : folder_name ,finalStructures:component_data },function(err, data) {
        console.log("success", component_data)
        res.send({ 'status': 200 });
    });

});

app.get('/component_data', function(req, res) {
    let file_name = req.param('file_name');
    
    connection.db.collection("component_data").findOne({ name: file_name }, function(err, data) {
       console.log(data)
        res.json(data);
    });
});



app.listen(process.env.PORT || DEFAULT_PORT, function() {
    console.log('listening on port' + DEFAULT_PORT);
});
