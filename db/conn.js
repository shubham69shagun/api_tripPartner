// const mongoose = require('mongoose');

// const mongo = require('mongodb');
// const MongoClient = mongo.MongoClient;

// const mongoUrl ="mongodb+srv://shubham:12345@mycluster.xwmom.mongodb.net/abc?retryWrites=true&w=majority"

// mongoose.connect("mongodb+srv://shubham7870448:shubham@mongodb@1stcluster.xwmom.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
//    useNewUrlParser:true,
//    useUnifiedTopology:true,
   
// }).then(()=>{
//     console.log(`connnection established`);

// }).catch((error)=>{
//     console.log(error);
// });

// var mydb;


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://shubham:12345@mycluster.xwmom.mongodb.net/abc?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(async (err) => {
//     if(err) console.log(err);
//     mydb = await client.db("abc");
//     // mydb.collection("shubham").find({id:1}).toArray((err,res)=>{
//     //     console.log(res);
//     // })
//   // perform actions on the collection object
// });

// // Connection with db
// // MongoClient.connect(mongoUrl, (err,client) => {
// //     if(err) console.log(`Error while connecting`);
// //     // db = client.db('augintern');
// //     console.log("help")
// // })
// const getDB = () =>  {
//    return mydb
// }

// module.exports = {getDB};

const MongoClient = require( 'mongodb' ).MongoClient;
const url = "mongodb+srv://shubham:12345@mycluster.xwmom.mongodb.net/abc?retryWrites=true&w=majority";

var _db;

module.exports = {
  connectToServer: function(callback){
    MongoClient.connect( url,  { useNewUrlParser: true }, function( err, client ) {
      _db  = client.db('abc');
      callback(err,client,_db);
    } );
  }
};
