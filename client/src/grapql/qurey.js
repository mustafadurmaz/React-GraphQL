const { gql } = require("@apollo/client");


const GET_POSTS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;