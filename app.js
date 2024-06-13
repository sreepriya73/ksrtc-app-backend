const express = require("express")
const mongoose =require("mongoose")
const cors =require("cors")
const {busmodel}=require("./models/Bus")
const  bcryptjs =require( "bcryptjs")


const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://sreepriya:sreepriya73@cluster0.rwd5pdm.mongodb.net/busdb?retryWrites=true&w=majority&appName=Cluster0")

const generateHashedPassword= async(password)=>{
    const salt=await bcryptjs.genSalt(10)
    return bcryptjs.hash(password,salt)
}


app.post("/signup",async(req,res)=>{
    let input=req.body
    let hashedpassword=await generateHashedPassword(input.password)
    console.log(hashedpassword)
    input.password=hashedpassword
    let bus=new busmodel(input)
    bus.save()
    res.json({"status":"success"})
})










app.listen(8084,()=>{
    console.log("server started")
})