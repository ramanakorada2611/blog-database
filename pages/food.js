const express=require('express')
const mainRouter=express.Router()
const FoodData=require('../controllers/food')

mainRouter.get('/foodLatestPosts',FoodData.getfoodLatesPosts)
mainRouter.get('/foodArticles',FoodData.getfoodArticles)
mainRouter.get('/foodPosts',FoodData.getfoodPosts)
mainRouter.get('/foodSidePost',FoodData.getfoodSidePost)
mainRouter.get('/foodStories',FoodData.getfoodStories)
module.exports=mainRouter