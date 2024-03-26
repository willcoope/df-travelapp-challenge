import axios from "axios";

const API_URL = "http://localhost:4000";

const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password,
    });
    const data = await response.data;
    console.log(data);
    if (data.user) {
      localStorage.setItem("user", JSON.stringify(data.user));
    }
    return data.user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const removeFavourite = async (username, password, removefavourite) => {
  try {
    const response = await axios.put(`${API_URL}/removefavourite`, {
      username,
      password,
      removefavourite,
    });
    const data = await response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const authService = {
  login,
  removeFavourite,
};

export default authService;
