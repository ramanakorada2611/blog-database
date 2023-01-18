const technologyLatestPosts=(req,res)=>{
    res.send([
        {
            id:1,
            title:"Johnny Depp Congratulations!",
            image:"https://tse1.mm.bing.net/th?q=Technology+Light&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
            descripition:"Johnny Depp to try to stage a Hollywood comeback after winning defamation suit against Amber Heard.Johnny Depp is an American actor, producer and musician. He has appeared in films, television series and video games.",
            date:'11-1-23',
            type:'hollywood'
          },
          {
            id:2,
            title:"Johnny Depp Congratulations!",
            image:"https://tse1.mm.bing.net/th?q=Technology+Light&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
            descripition:"Johnny Depp to try to stage a Hollywood comeback after winning defamation suit against Amber Heard.Johnny Depp is an American actor, producer and musician. He has appeared in films, television series and video games.",
            date:'11-1-23',
            type:'hollywood'
          },
          {
            id:3,
            title:"Johnny Depp Congratulations!",
            image:"https://tse1.mm.bing.net/th?q=Technology+Light&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
            descripition:"Johnny Depp to try to stage a Hollywood comeback after winning defamation suit against Amber Heard.Johnny Depp is an American actor, producer and musician. He has appeared in films, television series and video games.",
            date:'11-1-23',
            type:'hollywood'
          }
    ])
}



const technologyArticles=(req,res)=>{
  res.send([{
    id:1,
    name:'lorem',
    image:"https://tse1.mm.bing.net/th?q=Technology+Light&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    descripition:"lorem dfgsbgr dfgfs gsf fbfgd",
    date:"17-1-23"
  },
  {
    id:1,
    name:'lorem',
    image:"https://tse1.mm.bing.net/th?q=Technology+Light&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    descripition:"lorem dfgsbgr dfgfs gsf fbfgd",
    date:"17-1-23"
  },
  {
    id:1,
    name:'lorem',
    image:"https://tse1.mm.bing.net/th?q=Technology+Light&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    descripition:"lorem dfgsbgr dfgfs gsf fbfgd",
    date:"17-1-23"
  }])
}


const technologyPosts=(req,res)=>{
  res.send([
    {
    id:1,
    number:'2',
    image:"https://tse1.mm.bing.net/th?q=Technology+Light&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    name:"lorem",
    date:"17-1-23"
    },
    {
      id:2,
      number:'3',
      image:"https://tse1.mm.bing.net/th?q=Technology+Light&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
      name:"lorem",
      date:"17-1-23"
    },
    {
        id:3,
        number:'4',
        image:"https://tse1.mm.bing.net/th?q=Technology+Light&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
        name:"lorem",
        date:"17-1-23"
    }

])
}

const technologySidePost=(req,res)=>{
  res.send([{
    id:1,
    number:'2',
    image:"https://tse1.mm.bing.net/th?q=Technology+Light&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    title:"lorem",
    content:'lorem fvfsbvfsdb fvdics dvdufdsjn'
  }])
}

const technologyStories=(req,res)=>{
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

module.exports.gettechnologyLatesPosts=technologyLatestPosts;
module.exports.gettechnologyArticles=technologyArticles;
module.exports.gettechnologyPosts=technologyPosts;
module.exports.gettechnologySidePost=technologySidePost;
module.exports.gettechnologyStories=technologyStories;

 