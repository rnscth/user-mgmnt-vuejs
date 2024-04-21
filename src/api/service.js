
import axios from 'axios';
import BASE_URL from './config';
import { removeToken, setToken } from '@/router/auth';
import { useRouter } from 'vue-router';


const ApiService = {
  // User Authentication
  login(credentials) {
    return axios.post(`${BASE_URL}/login`, credentials);
  },

  setToken(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    setToken(token)
  },
  
  setUser(user){
    localStorage.setItem('user', JSON.stringify(user));
  },

  getLocalUser(){
    const userJSON = localStorage.getItem('user');
    return userJSON ? JSON.parse(userJSON) : null;
  },

  clearToken(){
    delete axios.defaults.headers.common['Authorization'];
    removeToken()
  },

  tokenVerify(token){
    axios.get(`${BASE_URL}/tokenVerify`, token);
  },

  // User Management
  getUsers(page = null) {
    if (page){
      return axios.get(`${BASE_URL}/users?page=${page}`);
    }
    return axios.get(`${BASE_URL}/users`);
  },

  getUsersAdmins() {
    return axios.get(`${BASE_URL}/users?IsAdmin=true`);
  },

  getUser(userId) {
    return axios.get(`${BASE_URL}/users/${userId}`);
  },

  updateUser(userId, userData) {
    return axios.patch(`${BASE_URL}/users/${userId}`, userData);
  },

  deleteUser(userId) {
    return axios.delete(`${BASE_URL}/users/${userId}`);
  },

  newUser(userData) {
    return axios.post(`${BASE_URL}/users`, userData);
  },

  // Change Password
  changePassword(userId, newPassword) {
    return axios.patch(`${BASE_URL}/users/${userId}`, newPassword );
  },

  // Other API methods...
};

export default ApiService;
