import axios from 'axios';
import authHeader from './auth-header';

//const API_URL = 'https://okidonguyen88.onrender.com/api/test/';
const API_URL = 'https://okidonguyen88.onrender.com/api/';

class UserService {
    getAllUser() {
        return axios.get(API_URL + 'user/all', { headers: authHeader() });
    }
}

export default new UserService();
