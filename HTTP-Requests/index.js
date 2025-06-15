import express from "express";
const app=express();
const port =3000;

// this is for acessing the root node or home page
app.get("/",(req,res)=>{
     console.log(req.rawHeaders); // rawHeaders are the key value pairs that come from server
     res.send("helloo naman")
 })
 // req is request and res is response

 // this is about page
 app.get("/about",(req,res)=>{
    // console.log(req.rawHeaders);
     res.send("hell ")
 })
 
 


app.listen(port, ()=>{
    console.log(`server started on port ${port}`)
})