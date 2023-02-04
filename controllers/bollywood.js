const { findAllFromDb } = require("../database/connection")

  const bollywoodLatestPosts=async(req,res)=>{
      try {
        const bollywoodLatestPosts=await findAllFromDb({},"bollywoodLatestPosts")
        return res.status(200).send({bollywoodLatestPosts:bollywoodLatestPosts})
      } catch (error) {
        console.log("Error occur in  fetching data",error)
       return res.status(500).send({message:"something went wrong"})
      }
  }  

  const bollywoodArticles=async(req,res)=>{
    try {
      const bollywoodArticles =await findAllFromDb({},"bollywoodArticles")
      return res.status(200).send({bollywoodArticle:bollywoodArticles})
    } catch (error) {
      console.log("Error occur in  fetching data",error)
     return res.status(500).send({message:"something went wrong"})
    }
  }


const bollwoodPosts= async(req,res)=>{
  try {
    const bollwoodPosts =await findAllFromDb({},"bollwoodPosts")
    return res.status(200).send({bollwoodPosts:bollwoodPosts})
  } catch (error) {
    console.log("Error occur in  fetching data",error)
   return res.status(500).send({message:"something went wrong"})
  }
}

const bollywoodSidePost=async(req,res)=>{
  try {
    const bollywoodSidePost =await findAllFromDb({},"bollywoodSidePost")
    return res.status(200).send({bollywoodSidePost:bollywoodSidePost})
  } catch (error) {
    console.log("Error occur in  fetching data",error)
   return res.status(500).send({message:"something went wrong"})
  }
}

const bollywoodStories=async(req,res)=>{
  try {
    const bollywoodStories=await findAllFromDb({},"bollywoodStories")
    return res.status(200).send({bollywoodStories:bollywoodStories})
  } catch (error) {
    console.log("Error occur in  fetching data",error)
   return res.status(500).send({message:"something went wrong"})
  }
}

module.exports.getbollywoodLatesPosts=bollywoodLatestPosts;
module.exports.getbollywoodArticles=bollywoodArticles;
module.exports.getbollywoodPosts=bollwoodPosts;
module.exports.getbollywoodSidePost=bollywoodSidePost;
module.exports.getbollywoodStories=bollywoodStories;

 