const { ApolloServer } = require('apollo-server');
const typeDefs=require("../server/graphql/typeDefs/typeDefs.js");
const resolvers=require("../server/graphql/resolvers/post.js");
const dotenv=require('dotenv');
const db = require('../server/config/db.js');

dotenv.config();


  const server =new ApolloServer({typeDefs, resolvers});

  db();

  server.listen(5000,()=>{
    console.log("server is running on port....:5000");
  })

