const postSchema = require("../../models/post.js");

module.exports = {
  Query: {
    getPosts: async () => {
      try {
        const allPosts = await postSchema.find();
        return allPosts;
      } catch (error) {
        console.log(error);
      }
    },
    getPost: async (_, { postId }) => {
      try {
        const getPost = await postSchema.find(postId);
        return getPost;
      } catch (error) {
        console.log(error);
      }
    },
  },

  Mutation: {
    createPost: async (_,{body}) => {
        try {
            const createPost=await postSchema.create(body)
            return createPost;
        } catch (error) {
            console.log(error);
        }
    }
  },
};
