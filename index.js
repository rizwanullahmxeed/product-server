
import express from "express"

const  app=express()


//Get Api

app.get("/working",(req,res)=>{
    res.send("I am working perfectly");
});

app.get("/profile",(req,res)=>{
    res.status(200).json({
        name: "Rizwan",
        userId: "1234"
    })
});

const PORT=5050
app.listen(PORT,()=>{
    console.log("Server is Running on PORT 5050")
})