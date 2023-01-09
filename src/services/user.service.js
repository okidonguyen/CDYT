import axios from 'axios';
import authHeader from './auth-header';

//const API_URL = 'http://localhost:3001/api/test/';
const API_URL = 'http://localhost:3001/api/';

class UserService {
    getAllUser() {
        return axios.get(API_URL + 'user/all', { headers: authHeader() });
    }
}

export default new UserService();
