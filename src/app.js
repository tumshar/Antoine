const express = require('express');

const app = express();

//app.use("/hello/2",(req,res)=>{
  //  res.send("hello2");
//})

//app.use("/hello",(req,res)=>{
  //  res.send("hello");
//})
app.get("/user",(req, res)=>{
    res.send({firstname:"tushar", age:"22"})
})  // this will only handle get call to .../user


app.post("/user",(req, res)=>{
    console.log("save data to the database");
    res.send("data saved to the database"); // saving data to the database
})



app.delete("/user",(req, res)=>{
    console.log("deleted succesfully");
    res.send("delete data"); // saving data to the database
})






app.use("/test",(req,res)=>{                                // this function is known as request handler
    res.send("hello world from the server side");     // will only respond to /test

})
//app.use("/",(req,res)=>{
  //  res.send("kya re lund fakir");
//})



app.listen(7000,()=>{
    console.log(" server is running on port 7000");

});

const portfinder = require('portfinder');

portfinder.getPortPromise({ port: 7000 })
  .then((port) => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
