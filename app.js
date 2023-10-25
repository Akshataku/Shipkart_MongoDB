const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const url = "mongodb://127.0.0.1:27017/shipkart"
const port = 3000
const app = express()

app.use(bodyParser.urlencoded({extended: true}));

// mongoose.connect("mongodb+srv://admin-mikaela:BIVpMLc21Lp3lyUJ@cluster0.p6fma.mongodb.net/shipkart?retryWrites=true&w=majority", {
//     useNewUrlParser: true, 
//     useUnifiedTopology: true
// });

mongoose.connect(url,{})
.then(result=>console.log("database connected"))
.catch(err=>console.log(err))

app.get('/',(req,res)=>{
    res.send("<h1> Hello from nodejs app</h1>")
})

app.listen(port,()=>{
    console.log("Server is running at port"+port)
})

// const userSchema = new Schema({
//     name: String,
//     email: String,
//     phone: Number
// },{versionKey:false})

// const User = mongoose.model("User",userSchema);

// const user = new User({
//     name: 'Priyanshu',
//     email: 'priya2002@gmail.com',
//     phone: 99998881111
// });

// user.save();