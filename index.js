const express=require("express")

const app=express()

const technology=require('./pages/technology')
const hollywood=require('./pages/hollywood')
const bolywood=require('./pages/bollywood')
const fitness=require('./pages/fitness')
const home=require('./pages/home')
const food=require('./pages/food')
const cors=require('cors')
app.use(cors({origin:['http://10.170.63.237','http://blogpost.com']}))
//ip address 

app.use('/',technology)
app.use('/',hollywood)
app.use('/',bolywood)
app.use('/',fitness)
app.use('/',home)
app.use('/',food)
app.listen(5000,function(){
    console.log("server is running at port 5000")
})