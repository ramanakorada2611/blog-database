const express=require('express')
const mainRouter=express.Router()
const HomeData=require('../controllers/home')

mainRouter.get('/homeLatestPosts',HomeData.gethomeLatesPosts)
mainRouter.get('/homeArticles',HomeData.gethomeArticles)
mainRouter.get('/homePosts',HomeData.gethomePosts)
mainRouter.get('/homeSidePost',HomeData.gethomeSidePost)
mainRouter.get('/homeStories',HomeData.gethomeStories)
module.exports=mainRouter