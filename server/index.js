const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    books: String
  }
`;

const resolvers = {
    Query: {
      books: () => "graphql deneme ...",
    },
  };

  const server =new ApolloServer({typeDefs, resolvers});

  server.listen(5000,()=>{
    console.log("server is running");
  })

