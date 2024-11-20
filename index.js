const express = require('express');
const app = express();

let port = 8080;
app.listen(port, ()=>{
//    console.log('Done')
})
app.get('/',(req,res)=>{
   console.log("Received")
   let html = "<h1>Helo World!</h1>"
   res.send(html);
}) 
app.get('/apple',(req,res)=>{
   console.log("Received")
   let html = "<h1>Apple</h1>"
   console.log(req.params)
   res.send(html);
}) 
app.get('/:username',(req,res)=>{
   console.log(req.params)
   let html = "<h1>Helo World!</h1>"
   res.send(html);
}) 
