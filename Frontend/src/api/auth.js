import axios from "axios";

const API = "http://localhost:5000";

export const signupUser = async (data) => {
  return await axios.post(`${API}/users/signup`, data);
};

export const loginUser = async (data) => {
  return await axios.post(`${API}/auth/login`, data);
};