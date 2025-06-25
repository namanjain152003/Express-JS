import express from "express";
const app=express();
const port=3000;
app.get("/",(req, res)=> {
    res.send("hello page")
    });

    app.post("/register", (req,res)=>{
    res.sendStatus(201);
    })

    app.put("/user/naman", (req,res)=>{
    res.sendStatus(200);
    })

    app.patch("/user/naman", (req,res)=>{
    res.sendStatus(200);
    })

    app.delete("/user/naman", (req,res)=>{
    res.sendStatus(200);
    })

    app.listen(port, ()=>{
        console.log(`server started on port ${port}`);
        });