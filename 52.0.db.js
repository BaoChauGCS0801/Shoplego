

const MongoClient = require('mongodb').MongoClient;
//const uri = "mongodb+srv://db01:8fGdNL1CEXgh63GI@cluster0-q8a6f.mongodb.net/ATN_Company?retryWrites=true&w=majority";
const uri = 'mongodb://localhost:27017/Shoplego';

MongoClient.connect(uri, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Shoplego");
  dbo.collection("product").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});