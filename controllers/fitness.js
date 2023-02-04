const { findAllFromDb } = require("../database/connection")

const fitnessLatestPosts=async(req,res)=>{
  try {
    const fitnessLatestPosts =await findAllFromDb({},"fitnessLatestPosts")
    return res.status(200).send({fitnessLatestPosts:fitnessLatestPosts})
  } catch (error) {
    console.log("Error occur in  fetching data",error)
   return res.status(500).send({message:"something went wrong"})
  }
}



const fitnessArticles=async(req,res)=>{
  try {
    const fitnessArticles =await findAllFromDb({},"fitnessArticles")
    return res.status(200).send({fitnessArticles:fitnessArticles})
  } catch (error) {
    console.log("Error occur in  fetching data",error)
   return res.status(500).send({message:"something went wrong"})
  }
}


const fitnessPosts=async(req,res)=>{
  try {
    const fitnessPosts =await findAllFromDb({},"fitnessPosts")
    return res.status(200).send({fitnessPosts:fitnessPosts})
  } catch (error) {
    console.log("Error occur in  fetching data",error)
   return res.status(500).send({message:"something went wrong"})
  }
}

const fitnessSidePost=async(req,res)=>{
  try {
    const fitnessSidePost =await findAllFromDb({},"fitnessSidePost")
    return res.status(200).send({fitnessSidePost:fitnessSidePost})
  } catch (error) {
    console.log("Error occur in  fetching data",error)
   return res.status(500).send({message:"something went wrong"})
  }
}

const fitnessStories=async(req,res)=>{
  try {
    const fitnessStories =await findAllFromDb({},"fitnessStories")
    return res.status(200).send({fitnessStories:fitnessStories})
  } catch (error) {
    console.log("Error occur in  fetching data",error)
   return res.status(500).send({message:"something went wrong"})
  }
}

module.exports.getfitnessLatesPosts=fitnessLatestPosts;
module.exports.getfitnessArticles=fitnessArticles;
module.exports.getfitnessPosts=fitnessPosts;
module.exports.getfitnessSidePost=fitnessSidePost;
module.exports.getfitnessStories=fitnessStories;

 