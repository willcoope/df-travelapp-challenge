import axios from "axios";

const API_URL = "http://localhost:4000";

const getreviews = async (location) => {
  try {
    const response = await axios.post(`${API_URL}/getreviews`, {
      location,
    });
    const data = await response.data;
    console.log(response);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const reviewService = {
  getreviews,
};

export default reviewService;
