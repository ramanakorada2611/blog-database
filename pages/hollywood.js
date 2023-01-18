const express=require('express')

const mainRouter=express.Router()
const HollywoodData=require('../controllers/hollywood')



mainRouter.get('/hollywoodArticles',HollywoodData.gethollywoodArticles)
mainRouter.get('/hollywoodLatestPosts',HollywoodData.gethollywoodLatesPosts)
mainRouter.get('/hollwoodPosts',HollywoodData.gethollywoodPosts)
mainRouter.get('/hollywoodSidePost',HollywoodData.gethollywoodSidePost)
mainRouter.get('/hollywoodStories',HollywoodData.gethollywoodStories)
// mainrouter.route('/hollywood').get(hollywood.gethollywood)


module.exports= mainRouter