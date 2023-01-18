const express=require('express')
const mainRouter=express.Router()
const FitnessData=require('../controllers/fitness')

mainRouter.get('/fitnessArticles',FitnessData.getfitnessArticles)
mainRouter.get('/fitnessLatestPosts',FitnessData.getfitnessPosts)
mainRouter.get('/fitnessPosts',FitnessData.getfitnessPosts)
mainRouter.get('/fitnessSidePost',FitnessData.getfitnessSidePost)
mainRouter.get('/fitnessStories',FitnessData.getfitnessStories)

module.exports=mainRouter;