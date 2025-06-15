import express from "express";
const app=express();
const port=3000; 
app.listen(port,()=> {
    console.log(`Server rumming on port ${port}`);
});

// here ()=> is a callback function which tells about the successfull establishment of the server.


