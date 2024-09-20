const express = require('express');

const app = express();

app.use("/",(req,res)=>{                                // this function is known as request handler
    res.send("kya re perpendicular kaisa hai");     // will only respond to /test

})



app.use("/test",(req,res)=>{                                // this function is known as request handler
    res.send("hello world from the server side");     // will only respond to /test

})



app.listen(3009,()=>{
    console.log(" server is running on port 3009");

});
