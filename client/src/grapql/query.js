const { gql } = require("@apollo/client");

export const GET_POSTS = gql`
  query Query {
    getPosts {
      id
      title
      description
    }
  }
`;
