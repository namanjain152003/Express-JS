import express from "express"
import bodyParser from "body-parser"
import {dirname} from "path"
import { fileURLToPath } from "url"
import { log } from "console";
const __dirname= dirname(fileURLToPath(import.meta.url));

const app=express();
const port=3000;

var userIsAuthorised=false;

app.use(bodyParser.urlencoded({ extended: true }));

function passwordCheck(req, res,next){
    const password=req.body["password"];
    if(password==="ILoveProgramming"){
        userIsAuthorised=true;
    }
    next();
}
//app.use(passwordCheck)

app.get("/", (req, res)=>{
    res.sendFile( __dirname+ "/public/index.html")
})

//app.use(passwordCheck)
app.post("/check", passwordCheck,  (req, res)=>{
    if(userIsAuthorised==true){
        res.sendFile(__dirname+"/public/secret.html")
    }
    else{
         res.sendFile(__dirname+"/public/index.html")   
         //res.redirect("/") can also be used to redirect      
    }
})
app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
    
})