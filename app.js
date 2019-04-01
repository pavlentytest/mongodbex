let mongoclient = require('mongodb').MongoClient;

let url = "mongodb://USERNAME:PASSWORD@127.0.0.1:27017/admin";


let result = function(db,callback) {
    let collection = db.collection('pupils');
    collection.find().toArray(function (err,res) {
        console.log(res)
    })
};

mongoclient.connect(url,{ useNewUrlParser: true } ,function (err,client) {
  // console.log("Connected...");
   //console.log(client);
   result(client.db('users'));
});
