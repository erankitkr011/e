

const express = require('express');
const {MongoClient}= require('mongodb');
const mongoose = require('mongoose')
const multer = require('multer');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));


// let db;
// let collection;

// const url = "mongodb+srv://havan81412:gB9UhuRtFeWwAOOG@cluster0.cpajb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

//! using mongodb
// MongoClient.connect(url)
//            .then((client)=>{
//              db = client.db("MULTER");
//              collection = db.collection("User");
//              console.log("database connected")
//            }).catch((err)=>{
//               console.log(err)
//            })

//! using mongoose

const userSchema = new mongoose.Schema(
    {
        name:{
            type: String,
        },
        images:{
            type: [String],
            default: [], 
        }
    }
)

const User = mongoose.model('User', userSchema);

const url = "mongodb+srv://havan81412:gB9UhuRtFeWwAOOG@cluster0.cpajb.mongodb.net/MULTERMONGOOSE?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(url)
.then(()=>console.log("mongoose connected"))
.catch((err)=>console.log(err))


const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads/');
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+'-'+file.originalname)
    }
})


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./form.html'))
})           

const uploads = multer({
    storage:storage
})

app.post('/file',uploads.single('file'),async(req,res)=>{
        const userName = req.body.name;
       const imagePath = req.file.path;

       let user = await User.findOne({name:userName})
       if(user){
        user.images.push(imagePath);
        await user.save();
        res.send("file ulpoaded")
       }else{
           user = new User({
            name:userName,
            images:[imagePath]
          })
          await user.save();
          res.send("file uploaded")
       }
})

app.get('/all',async(req,res)=>{

    const user = await User.find();
    res.json({
        user
    })
})

//! mongodb....

// app.post('/file',uploads.single('file'),(req,res)=>{
//     const userName = req.body.name;
//     const imagePath = req.file.path;

//     collection.findOne({name:userName})
//               .then((user)=>{
//                 if(user){
//                 collection.updateOne(
//                     {name:userName},
//                     {$push:{images:imagePath}}
//                   ).then(()=>{
//                     res.send("file uploaded")
//                   })
//                 }else{
//                     collection.insertOne({
//                         name:userName,
//                         images:[imagePath]
//                     }).then(()=>{
//                         res.send("file uploaded")
//                     }).catch((err)=>{
//                         console.log(err)
//                     })
//                 }

//             }).catch((err)=>console.log(err))

// })

// app.get('/all',(req,res)=>{
//     collection
//     .find()
//     .toArray()
//     .then((items)=>{
//         res.json(items)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// })


app.listen(3000,()=>{
    console.log("server started")
})

