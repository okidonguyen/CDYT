import axios from 'axios';
import authHeader from './auth-header';
import {API_URL} from '~/data';

const AuthService = () => {
    const login = async (username, password) => {
        let response = null;
        try {
            response = await axios.post(
                API_URL + 'auth/signin',
                {
                    username,
                    password,
                },
                { validateStatus: false }
            );
            return response;
        } catch (error) {
            console.log(error);
        } finally {
            //console.log(response);
            return response;
        }
    };

    const logout = () => {
        localStorage.removeItem('user');
    };

    const register = async (username, email, password) => {
        return await axios.post(API_URL + 'auth/signup', {
            username,
            email,
            password,
        });
    };

    const authConfirm = async () => {
        return await axios.get(API_URL + 'auth/authConfirm', { headers: authHeader() });
    }

    const getCurrentUser = () => {
        return JSON.parse(localStorage.getItem('user'));
    };

    return {
        login: login,
        logout: logout,
        register: register,
        getCurrentUser: getCurrentUser,
        authConfirm: authConfirm,
    };
};

export default AuthService;
