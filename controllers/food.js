const { findAllFromDb } = require("../database/connection")

const foodLatestPosts=async(req,res)=>{
  try {
    const foodLatestPosts=await findAllFromDb({},"foodLatestPosts")
    return res.status(200).send({foodLatestPosts:foodLatestPosts})
  } catch (error) {
    console.log("Error occur in  fetching data",error)
   return res.status(500).send({message:"something went wrong"})
  }
}



const foodArticles=async(req,res)=>{
  try {
    const foodArticles=await findAllFromDb({},"foodArticles")
    return res.status(200).send({foodArticles:foodArticles})
  } catch (error) {
    console.log("Error occur in  fetching data",error)
   return res.status(500).send({message:"something went wrong"})
  }
}


const foodPosts=async(req,res)=>{
  try {
    const foodPosts=await findAllFromDb({},"foodPosts")
    return res.status(200).send({foodPosts:foodPosts})
  } catch (error) {
    console.log("Error occur in  fetching data",error)
   return res.status(500).send({message:"something went wrong"})
  }
}

const foodSidePost=async(req,res)=>{
  try {
    const foodSidePost=await findAllFromDb({},"foodSidePost")
    return res.status(200).send({foodSidePost:foodSidePost})
  } catch (error) {
    console.log("Error occur in  fetching data",error)
   return res.status(500).send({message:"something went wrong"})
  }
}

const foodStories=async(req,res)=>{
  try {
    const foodStories=await findAllFromDb({},"foodStories")
    return res.status(200).send({foodStories:foodStories})
  } catch (error) {
    console.log("Error occur in  fetching data",error)
   return res.status(500).send({message:"something went wrong"})
  }
}

module.exports.getfoodLatesPosts=foodLatestPosts;
module.exports.getfoodArticles=foodArticles;
module.exports.getfoodPosts=foodPosts;
module.exports.getfoodSidePost=foodSidePost;
module.exports.getfoodStories=foodStories;

 