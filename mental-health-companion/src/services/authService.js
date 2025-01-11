// src/services/authService.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/users/';

const register = (email, name, password) => {
  return axios.post(API_URL + 'register/', {
    email,
    name,
    password
  });
};

const login = (email, password) => {
  return axios.post(API_URL + 'login/', {
    email,
    password
  });
};

const authService = {
  register,
  login,
};

export default authService;
