import express from "express";
const app=express();
const port =3000;
app.get("/",(req,res)=>{
    // console.log(req.rawHeaders);
     res.send("helloo")
 })
 app.get("/about",(req,res)=>{
    // console.log(req.rawHeaders);
     res.send("hell ")
 })
 
 


app.listen(port, ()=>{
    console.log(`server started on port ${port}`)
})