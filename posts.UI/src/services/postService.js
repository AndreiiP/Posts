import axios from "axios";

const API_URL = `${import.meta.env.VITE_APP_API_DOMAIN}/api/Post`;

const postService = {
  getAllPosts: async () => {
    try {
      const response = await axios.get(`${API_URL}/GetAll`);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
    }
  },
  getPostById: async (postId) => {
    try {
      const response = await axios.get(`${API_URL}/${postId}`);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
    }
  },
};

export default postService;
