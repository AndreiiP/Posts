import axios from "axios";

const API_URL: string = `${import.meta.env.VITE_APP_API_DOMAIN}/api/Post`;

interface PostData {
  id: number;
  title: string;
  body: string;
  commentCount: number;
}

const postService = {
  getAllPosts: async (): Promise<PostData[]> => {
    try {
      const response = await axios.get(`${API_URL}/GetAll`);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },
  getPostById: async (postId: number): Promise<PostData> => {
    try {
      const response = await axios.get(`${API_URL}/${postId}`);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },
};

export default postService;
