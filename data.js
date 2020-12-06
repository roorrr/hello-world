var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/player";
 
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database create");
  var dbase = db.db("player");
    dbase.createCollection('data', function (err, res) {
        if (err) throw err;
        console.log("create collection");
  db.close();
});

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("player");
    var myobj =  [
        { name: 'Antetokounmpo', score:29.7, time:30.8, rebound:13, assists:7.1, age:25},
        { name: 'Middleton', score:21.4, time:30.5, rebound:5.5, assists:5.4, age:32},
        { name: 'Bledsoe', score:15.7, time:26.1, rebound:6.4, assists:7.1, age:33},
        { name: 'Lopez', score:13.8, time:27.3, rebound:7.5, assists:3.4, age:29},
        { name: 'Hill', score:9.7, time:21.2, rebound:2.3, assists:6.5, age:34},
       ];
    dbo.collection("data").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("Numbers of Players: " + res.insertedCount);
        db.close();
    });
});

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("player");
    var whereStr = {"name":'Middleton'}; 
    var updateStr = {$set: { "score" : 23.2 }};
    dbo.collection("data").updateOne(whereStr, updateStr, function(err, res) {
        if (err) throw err;
        console.log("Update Success");
        db.close();
    });
});

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("player");
    var whereStr = {"name":'Hill'};  
    dbo.collection("data").deleteOne(whereStr, function(err, obj) {
        if (err) throw err;
        console.log("Delete Success");
        db.close();
    });
});

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("player");
    var mysort = { score: 1 };
    dbo.collection("data").find().sort(mysort).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("player");
    var mysort = { times: -1 };
    dbo.collection("data").find().sort(mysort).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
}