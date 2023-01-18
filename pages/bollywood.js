const express=require('express')
const mainRouter=express.Router()
const BollywoodData=require('../controllers/bollywood')

mainRouter.get('/bollywoodLatestPosts',BollywoodData.getbollywoodLatesPosts)
mainRouter.get('/bollywoodArticles',BollywoodData.getbollywoodArticles)
mainRouter.get('/bollwoodPosts',BollywoodData.getbollywoodPosts)
mainRouter.get('/bollywoodSidePost',BollywoodData.getbollywoodSidePost)
mainRouter.get('/bollywoodStories',BollywoodData.getbollywoodStories)
module.exports=mainRouter