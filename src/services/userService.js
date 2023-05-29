import axios from 'axios';
import BaseUrl from './BaseUrl';

const UserService = {
  UserSignUp: async function (data) {
    return await axios.post(BaseUrl() + '/api/User/register', data);
  },
  UserSignIn: async function (data) {
    return await axios.post(BaseUrl() + '/api/User/login', data);
  },
  UserPostAdd: async function (data) {
    return await axios.post(BaseUrl() + '/api/PostHelp/postadd', data);
  },
  GetAllPosts: async function () {
    return await axios.get(BaseUrl() + '/api/PostHelp/getallposts');
  },
};

export default UserService;
