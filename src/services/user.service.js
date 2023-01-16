import axios from 'axios';
import authHeader from './auth-header';

import {API_URL} from '~/data';

class UserService {
    getAllUser() {
        return axios.get(API_URL + 'user/all', { headers: authHeader() });
    }
}

export default new UserService();
