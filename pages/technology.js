const express=require('express')
const mainRouter=express.Router()
const TechnologyData=require('../controllers/technology')

mainRouter.get('/technologyLatestPosts',TechnologyData.gettechnologyLatesPosts)
mainRouter.get('/technologyArticles',TechnologyData.gettechnologyArticles)
mainRouter.get('/technologyPosts',TechnologyData.gettechnologyPosts)
mainRouter.get('/technologySidePost',TechnologyData.gettechnologySidePost)
mainRouter.get('/technologyStories',TechnologyData.gettechnologyStories)
module.exports=mainRouter