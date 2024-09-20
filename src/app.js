const express = require('express');

const app = express();


app.get("/user/:userid/:name/:password",(req, res)=>{    
  console.log(req.params);                 // ac and abc both will be handled
    res.send({firstname:"tushar", age:"22"})
})  









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
