const { findAllFromDb } = require("../database/connection")

const homeLatestPosts=async(req,res)=>{
  try {
    const homeLatestPosts=await findAllFromDb({},"homeLatestPosts")
    return res.status(200).send({homeLatestPosts:homeLatestPosts})
  } catch (error) {
    console.log("Error occur in  fetching data",error)
   return res.status(500).send({message:"something went wrong"})
  }
}



const homeArticles=async(req,res)=>{
  try {
    const homeArticles=await findAllFromDb({},"homeArticles")
    return res.status(200).send({homeArticles:homeArticles})
  } catch (error) {
    console.log("Error occur in  fetching data",error)
   return res.status(500).send({message:"something went wrong"})
  }
}


const homePosts=async(req,res)=>{
  try {
    const homePosts=await findAllFromDb({},"homePosts")
    return res.status(200).send({homePosts:homePosts})
  } catch (error) {
    console.log("Error occur in  fetching data",error)
   return res.status(500).send({message:"something went wrong"})
  }
}

const homeSidePost=async(req,res)=>{
  try {
    const homeSidePost=await findAllFromDb({},"homeSidePost")
    return res.status(200).send({homeSidePost:homeSidePost})
  } catch (error) {
    console.log("Error occur in  fetching data",error)
   return res.status(500).send({message:"something went wrong"})
  }
}

const homeStories=async(req,res)=>{
  try {
    const homeStories=await findAllFromDb({},"homeStories")
    return res.status(200).send({homeStories:homeStories})
  } catch (error) {
    console.log("Error occur in  fetching data",error)
   return res.status(500).send({message:"something went wrong"})
  }
}

module.exports.gethomeLatesPosts=homeLatestPosts;
module.exports.gethomeArticles=homeArticles;
module.exports.gethomePosts=homePosts;
module.exports.gethomeSidePost=homeSidePost;
module.exports.gethomeStories=homeStories;

 