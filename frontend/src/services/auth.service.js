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
    console.log(data.user);
    if (data.user) {
      localStorage.setItem("user", JSON.stringify(data.user));
    }
    return data.user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const signup = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, {
      username,
      password,
    });
    const data = await response.data;
    console.log(data);
    if (data.user) {
      localStorage.setItem("user", JSON.stringify(data.user));
    }
    return data;
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

const addFavourite = async (username, password, newfavourite) => {
  try {
    const response = await axios.put(`${API_URL}/addfavourite`, {
      username,
      password,
      newfavourite,
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
  signup,
  removeFavourite,
  addFavourite,
};

export default authService;
