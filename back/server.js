const express = require('express')
const bodyParser = require("body-parser")
const mongodb = require('mongodb')
const port = 8000

var ObjectID = mongodb.ObjectID;

let db;

let tasks

// const mongoUrl = 'mongodb://<dbuser>:<dbpassword>@ds145463.mlab.com:45463/movies'
// const mongoUrl = 'mongodb://AreejAk:@reej71794721@ds261253.mlab.com:61253/list'
const mongoUrl = 'mongodb://AreejAk:123456789Areej@ds261253.mlab.com:61253/list'

mongodb.MongoClient.connect(mongoUrl, function (err, database) {
    if (err) {
      console.log(err);
    }

    // Save database object from the callback for reuse.
    db = database.db("list");

    tasks = db.collection("tasks")

    console.log("Database connection ready");

    var server = app.listen(port, function () {
        console.log("App now running on port", port);
    });
})

let app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();//to allow the user to shift from one app to onther (to enter from the server to the list and vise versa)
});

// let tasks = [ 
//      {
//         task_Name: 'Finish Internship',
//         responsiblties: 'areej',
//         priorty: 'low'
//     },
//      {
//         task_Name: 'working',
//         responsiblties: 'areej',
//         priorty: 'low'
//     },
//     {
//         task_Name: 'home',
//         responsiblties: 'areej',
//         priorty: 'low'
//     },
// ]


app.post('/addTask', (req, res) => {
    console.log(req.body);
    tasks.insertOne(req.body, function(err, result){
        if(err){
            console.log(err)
        }
        console.log(result)
    })
    // tasks.push(req.body)
  });


  app.post('/deleteTask', (req, res) => {
    // console.log(req.body);
    tasks.remove( { _id: ObjectID(req.body._id) } )
    // tasks.pop(req.body)
  });



app.get("/list", function(req,res){
    let tasks_list = tasks.find({}).toArray( (err, data) => {
        res.send(data)
    })
    
})

// app.listen(port, function(err){
//     if(err){
//         console.log(err)
//     }
//     console.log(`Server is running on port ${port}`)
// })