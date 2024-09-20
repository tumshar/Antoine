const express = require('express');

const app = express();

app.use("/hello/2",(req,res)=>{
    res.send("hello2");
})

app.use("/hello",(req,res)=>{
    res.send("hello");
})

app.use("/test",(req,res)=>{                                // this function is known as request handler
    res.send("hello world from the server side");     // will only respond to /test

})
app.use("/",(req,res)=>{
    res.send("kya re lund fakir");
})



app.listen(7000,()=>{
    console.log(" server is running on port 7000");

});
