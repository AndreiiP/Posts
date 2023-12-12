import axios from "axios";

const API_URL: string = `${import.meta.env.VITE_APP_API_DOMAIN}/api`;
const token = localStorage.getItem("token");

interface CommentData {
  id: number;
  message: string;
  createdAt: string;
  userName: string;
}

const commentService = {
  addComment: async (postId: number, message: string): Promise<CommentData> => {
    try {
      const response = await axios.post(`${API_URL}/posts/${postId}/comments`, {
        message: message,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },
};

export default commentService;
