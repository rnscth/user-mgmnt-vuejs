import axios from 'axios';
import BASE_URL from './config';

const ApiService = {
  // User Authentication
  login(credentials) {
    return axios.post(`${BASE_URL}/login`, credentials);
  },

  jwtRefresh(token) {
    return axios.post(`${BASE_URL}/refresh`, { token });
  },

  // User Management
  getUsers() {
    return axios.get(`${BASE_URL}/users`);
  },

  getUsersAdmins() {
    return axios.get(`${BASE_URL}/users?IsAdmin=true`);
  },

  getUser(userId) {
    return axios.get(`${BASE_URL}/users/${userId}`);
  },

  updateUser(userId, userData) {
    return axios.put(`${BASE_URL}/users/${userId}`, userData);
  },

  deleteUser(userId) {
    return axios.delete(`${BASE_URL}/users/${userId}`);
  },

  newUser(userData) {
    return axios.post(`${BASE_URL}/users`, userData);
  },

  // Change Password
  changePassword(userId, newPassword) {
    return axios.put(`${BASE_URL}/users/${userId}/password`, { newPassword });
  },

  // Other API methods...
};

export default ApiService;
