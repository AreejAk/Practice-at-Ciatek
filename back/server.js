const express = require('express')
const bodyParser = require("body-parser")

const port = 8000

let app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();//to allow the user to shift from one app to onther (to enter from the server to the list and vise versa)
});

let tasks = [ 
     {
        task_Name: 'Finish Internship',
        responsiblties: 'areej',
        priorty: 'low'
    },
     {
        task_Name: 'working',
        responsiblties: 'areej',
        priorty: 'low'
    },
    {
        task_Name: 'home',
        responsiblties: 'areej',
        priorty: 'low'
    },
]


app.post('/addTask', (req, res) => {
    console.log(req.body);
    tasks.push(req.body)
  });


  app.post('/deleteTask', (req, res) => {
    console.log(req.body);
    tasks.pop(req.body)
  });



app.get("/list", function(req,res){
    res.send(tasks)
})

app.listen(port, function(err){
    if(err){
        console.log(err)
    }
    console.log(`Server is running on port ${port}`)
})