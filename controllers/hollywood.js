const hollywoodLatestPosts=(req,res)=>{
    res.send([
        {
            id:1,
            title:"Johnny Depp Congratulations!",
            image:"https://www.hollywoodnews.com/wp-content/uploads/2022/06/johnny-Depp-HFAs.jpg",
            descripition:"Johnny Depp to try to stage a Hollywood comeback after winning defamation suit against Amber Heard.Johnny Depp is an American actor, producer and musician. He has appeared in films, television series and video games.",
            date:'11-1-23',
           
          },
          {
            id:2,
            title:"Johnny Depp Congratulations!",
            image:"https://www.hollywoodnews.com/wp-content/uploads/2022/06/johnny-Depp-HFAs.jpg",
            descripition:"Johnny Depp to try to stage a Hollywood comeback after winning defamation suit against Amber Heard.Johnny Depp is an American actor, producer and musician. He has appeared in films, television series and video games.",
            date:'11-1-23',
            
          },
          {
            id:3,
            title:"Johnny Depp Congratulations!",
            image:"https://www.hollywoodnews.com/wp-content/uploads/2022/06/johnny-Depp-HFAs.jpg",
            descripition:"Johnny Depp to try to stage a Hollywood comeback after winning defamation suit against Amber Heard.Johnny Depp is an American actor, producer and musician. He has appeared in films, television series and video games.",
            date:'11-1-23',
            
          }
    ])
}



const hollywoodArticles=(req,res)=>{
  res.send([{
    id:1,
    name:'lorem',
    image:"https://www.hollywoodnews.com/wp-content/uploads/2022/06/johnny-Depp-HFAs.jpg",
    descripition:"lorem dfgsbgr dfgfs gsf fbfgd",
    date:"17-1-23"
  },
  {
    id:1,
    name:'lorem',
    image:"https://www.hollywoodnews.com/wp-content/uploads/2022/06/johnny-Depp-HFAs.jpg",
    descripition:"lorem dfgsbgr dfgfs gsf fbfgd",
    date:"17-1-23"
  },
  {
    id:1,
    name:'lorem',
    image:"https://www.hollywoodnews.com/wp-content/uploads/2022/06/johnny-Depp-HFAs.jpg",
    descripition:"lorem dfgsbgr dfgfs gsf fbfgd",
    date:"17-1-23"
  }])
}


const hollwoodPosts=(req,res)=>{
  res.send([
    {
    id:1,
    number:'2',
    image:"https://www.hollywoodnews.com/wp-content/uploads/2022/06/johnny-Depp-HFAs.jpg",
    name:"lorem",
    date:"17-1-23"
    },
    {
      id:2,
      number:'3',
      image:"https://www.hollywoodnews.com/wp-content/uploads/2022/06/johnny-Depp-HFAs.jpg",
      name:"lorem",
      date:"17-1-23"
    },
    {
        id:3,
        number:'4',
        image:"https://www.hollywoodnews.com/wp-content/uploads/2022/06/johnny-Depp-HFAs.jpg",
        name:"lorem",
        date:"17-1-23"
    }

])
}

const hollywoodSidePost=(req,res)=>{
  res.send([{
    id:1,
    number:'2',
    image:"https://www.hollywoodnews.com/wp-content/uploads/2022/06/johnny-Depp-HFAs.jpg",
    title:"lorem",
    content:'lorem fvfsbvfsdb fvdics dvdufdsjn'
  }])
}

const hollywoodStories=(req,res)=>{
  res.send([
    {
    id:1,
    name:'lorem',
    content:'Interstellar is a 2014 epic science fiction film co-written, directed, and produced by Christopher Nolan. It stars Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen Burstyn, Matt Damon, and Michael Caine.',
    date:'17-1-23',
    },
    {
      id:2,
      name:'lorem',
      content:'Interstellar is a 2014 epic science fiction film co-written, directed, and produced by Christopher Nolan. It stars Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen Burstyn, Matt Damon, and Michael Caine.',
      date:'17-1-23',
      },
      {
        id:3,
        name:'lorem',
        content:'Interstellar is a 2014 epic science fiction film co-written, directed, and produced by Christopher Nolan. It stars Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen Burstyn, Matt Damon, and Michael Caine.',
        date:'17-1-23',
        },
])
}

module.exports.gethollywoodLatesPosts=hollywoodLatestPosts;
module.exports.gethollywoodArticles=hollywoodArticles;
module.exports.gethollywoodPosts=hollwoodPosts;
module.exports.gethollywoodSidePost=hollywoodSidePost;
module.exports.gethollywoodStories=hollywoodStories;

 