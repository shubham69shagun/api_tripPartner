const express = require('express');
const app = express();
require('mongodb')
const mongoUtil = require('./db/conn');
const port = process.env.PORT || 3000;

var mydb;

app.get('/', function (req, res) {
    mydb.collection("shubham").find().toArray((err,result)=>{
      res.send(result);
  })
})


app.get('/location',(req,res)=>{
    let beaches= req.query.beaches;
    let hillstations = req.query.hillstations;
    if(beaches){
         mydb.collection("shubham").find({category:{$in:[beaches]}}).toArray((err,result)=>{
            res.send(result);
        })
    }
    else if(hillstations){
        mydb.collection("shubham").find({category:{$in:[hillstations]}}).toArray((err,result)=>{
             res.send(result);
        })
    }
    else if(beaches && hillstations){
        mydb.collection("shubham").find({category:{$in:[beaches,hillstations]}}).toArray((err,result)=>{
            res.send(result);
        })
    }
    else{
        mydb.collection("shubham").find().toArray((err,result)=>{
            res.send(result);
        })
    }
})

app.get('/packages/:id',(req,res)=>{
    let id = Number(req.params.id);
    console.log(id);
    mydb.collection("package_distribution").find({id:id}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result[0].packages);
    })
})

app.get('/location/national/',(req,res)=>{
    let sort = {}
    if(req.query.sort){
        sort ={starting_from:req.query.sort}
    }
    mydb.collection("shubham").find({country:"India"}).sort(sort).toArray((err,result)=>{
        res.send(result);
    })
})

app.get('/location/international/',(req,res)=>{
    let sort = {}
    if(req.query.sort){
        sort ={starting_from:req.query.sort}
    }
    mydb.collection("shubham").find({country:{$ne:"India"}}).sort(sort).toArray((err,result)=>{
        res.send(result);
    })
})

app.get('/location/hillstations/',(req,res)=>{
    let sort = {}
    if(req.query.sort){
        sort ={starting_from:req.query.sort}
    }
    mydb.collection("shubham").find({category:{$in:["Hillstations"]}}).sort(sort).toArray((err,result)=>{
        res.send(result);
   })
})


app.get('/location/hillstations/',(req,res)=>{
    let sort = {}
    if(req.query.sort){
        sort ={starting_from:req.query.sort}
    }
    mydb.collection("shubham").find({category:{$in:["Beaches"]}}).sort(sort).toArray((err,result)=>{
        res.send(result);
   })
})

app.get('/location/honeymoon/',(req,res)=>{
    let sort = {}
    if(req.query.sort){
        sort ={starting_from:req.query.sort}
    }
    mydb.collection("shubham").find({category:{$in:["Honeymoon"]}}).sort(sort).toArray((err,result)=>{
        res.send(result);
   })
})

app.get('/location/cultural/',(req,res)=>{
    let sort = {}
    if(req.query.sort){
        sort ={starting_from:req.query.sort}
    }
    mydb.collection("shubham").find({category:{$in:["Cultural"]}}).sort(sort).toArray((err,result)=>{
        res.send(result);
   })
})

app.get('/location/holiday/',(req,res)=>{
    let sort = {}
    if(req.query.sort){
        sort ={starting_from:req.query.sort}
    }
    mydb.collection("shubham").find({category:{$in:["Holiday"]}}).sort(sort).toArray((err,result)=>{
        res.send(result);
   })
})

app.get('/location/adventure/',(req,res)=>{
    let sort = {}
    if(req.query.sort){
        sort ={starting_from:req.query.sort}
    }
    mydb.collection("shubham").find({category:{$in:["Adventure"]}}).sort(sort).toArray((err,result)=>{
        res.send(result);
   })
})

app.get('/location/honeymoon/',(req,res)=>{
    let sort = {}
    if(req.query.sort){
        sort ={starting_from:req.query.sort}
    }
    mydb.collection("shubham").find({category:{$in:["Honeymoon"]}}).sort(sort).toArray((err,result)=>{
        res.send(result);
   })
})

app.get('/bookings',(req,res)=>{
    let email = req.query.email;
    let query = {}
    if(email){
        query = {"email":email}
    }
    mydb.collection('boookings').find(query).toArray((err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})

app.post('/placeBooking',(req,res)=>{
    mydb.collection('bookings').insert(req.body,(err,result)=>{
        if(err) throw err;
        res.send('Booking Confirmed');
    })
})


mongoUtil.connectToServer((err,client,db)=>{
    if (err) console.log(err);
    mydb=db
    app.listen(port,()=>{
        console.log('server is up on '+port);
    })
});