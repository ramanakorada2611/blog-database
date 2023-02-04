const { findAllFromDb } = require("../database/connection")

const hollywoodLatestPosts=async(req,res)=>{
  try {
    const hollywoodLatestPosts=await findAllFromDb({},"hollywoodLatestPosts")
    return res.status(200).send({hollywoodLatestPosts:hollywoodLatestPosts})
  } catch (error) {
    console.log("Error occur in  fetching data",error)
   return res.status(500).send({message:"something went wrong"})
  }
}



const hollywoodArticles=async(req,res)=>{
  try {
    const hollywoodArticles=await findAllFromDb({},"hollywoodArticles")
    return res.status(200).send({hollywoodArticles:hollywoodArticles})
  } catch (error) {
    console.log("Error occur in  fetching data",error)
   return res.status(500).send({message:"something went wrong"})
  }
}


const hollwoodPosts=async(req,res)=>{
  try {
    const hollwoodPosts=await findAllFromDb({},"hollwoodPosts")
    return res.status(200).send({hollwoodPosts:hollwoodPosts})
  } catch (error) {
    console.log("Error occur in  fetching data",error)
   return res.status(500).send({message:"something went wrong"})
  }
}

const hollywoodSidePost=async(req,res)=>{
  try {
    const hollywoodSidePost=await findAllFromDb({},"hollywoodSidePost")
    return res.status(200).send({hollywoodSidePost:hollywoodSidePost})
  } catch (error) {
    console.log("Error occur in  fetching data",error)
   return res.status(500).send({message:"something went wrong"})
  }
}

const hollywoodStories=async(req,res)=>{
  try {
    const hollywoodStories=await findAllFromDb({},"hollywoodStories")
    return res.status(200).send({hollywoodStories:hollywoodStories})
  } catch (error) {
    console.log("Error occur in  fetching data",error)
   return res.status(500).send({message:"something went wrong"})
  }
}

module.exports.gethollywoodLatesPosts=hollywoodLatestPosts;
module.exports.gethollywoodArticles=hollywoodArticles;
module.exports.gethollywoodPosts=hollwoodPosts;
module.exports.gethollywoodSidePost=hollywoodSidePost;
module.exports.gethollywoodStories=hollywoodStories;

 