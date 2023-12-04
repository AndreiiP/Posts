import axios, { AxiosResponse } from "axios";

const API_URL: string = `${import.meta.env.VITE_APP_API_DOMAIN}/api`;

const authService = {
  login: async (email: string, password: string): Promise<AxiosResponse> => {
    try {
      const response = await axios.post(`${API_URL}/Auth/Login`, {
        email: email,
        password: password,
      });

      localStorage.setItem("token", response.data.data);

      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default authService;
