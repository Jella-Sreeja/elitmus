const express=require("express")
//const mongoose=require("mongoose")
const app=express()
const path=require("path")
const hbs=require("hbs")
const collection=require("./mongodb")
const LogInCollection = require("./mongodb")

//const port = process.env.PORT || 3005
app.use(express.json())


const templatePath=path.join(__dirname,'../templates')
const publicPath=path.join(__dirname,'../public')

//mongoose.set('strictQuery', true);
app.set("view engine","hbs")
app.set("views",templatePath)
app.use(express.urlencoded({extended:false}))
app.use(express.static(publicPath))




app.get("/",(req,res)=>{
    res.render("login")
})

app.get("/sign",(req,res)=>{
    res.render("sign")
})

app.get("/home",(req,res)=>{
    res.render("home")
})

app.get("/game",(req,res)=>{
    res.render("game")
})


//app.get("/clues",(req,res)=>{
    //res.render("clues")
//})


app.post("/sign",async(req,res)=>{

    const data={
        name:req.body.name,
        password:req.body.password
    }
await LogInCollection.insertMany([data])

res.render("home")
})

app.post("/login",async(req,res)=>{

         try{
            const check=await LogInCollection.findOne({name:req.body.name})

            if(check.password===req.body.password){
                res.render("home")
            }
            else{
                res.send("Wrong Password")
            }
         }
         catch(e){
            res.send("Wrong details")
         }

})

//app.post("/home",async(req,res)=>{
   // res.render("game")
//})

app.listen(3000,()=>{
    console.log("port connected");
})
