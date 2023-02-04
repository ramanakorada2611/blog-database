const { findAllFromDb } = require("../database/connection")

const technologyLatestPosts=async(req,res)=>{
  try {
    const technologyLatestPosts=await findAllFromDb({},"technologyLatestPosts")
    return res.status(200).send({technologyLatestPosts:technologyLatestPosts})
  } catch (error) {
    console.log("Error occur in  fetching data",error)
   return res.status(500).send({message:"something went wrong"})
  }
}



const technologyArticles=async(req,res)=>{
  try {
    const technologyArticles=await findAllFromDb({},"technologyArticles")
    return res.status(200).send({technologyArticles:technologyArticles})
  } catch (error) {
    console.log("Error occur in  fetching data",error)
   return res.status(500).send({message:"something went wrong"})
  }
}


const technologyPosts=async(req,res)=>{
  try {
    const technologyPosts=await findAllFromDb({},"technologyPosts")
    return res.status(200).send({technologyPosts:technologyPosts})
  } catch (error) {
    console.log("Error occur in  fetching data",error)
   return res.status(500).send({message:"something went wrong"})
  }
}

const technologySidePost=async(req,res)=>{
  try {
    const technologySidePost=await findAllFromDb({},"technologySidePost")
    return res.status(200).send({technologySidePost:technologySidePost})
  } catch (error) {
    console.log("Error occur in  fetching data",error)
   return res.status(500).send({message:"something went wrong"})
  }
}

const technologyStories=async(req,res)=>{
  try {
    const technologyStories=await findAllFromDb({},"technologyStories")
    return res.status(200).send({technologyStories:technologyStories})
  } catch (error) {
    console.log("Error occur in  fetching data",error)
   return res.status(500).send({message:"something went wrong"})
  }
}

module.exports.gettechnologyLatesPosts=technologyLatestPosts;
module.exports.gettechnologyArticles=technologyArticles;
module.exports.gettechnologyPosts=technologyPosts;
module.exports.gettechnologySidePost=technologySidePost;
module.exports.gettechnologyStories=technologyStories;



