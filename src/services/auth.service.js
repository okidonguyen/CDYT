import axios from 'axios';

//const API_URL = 'https://okidonguyen88.onrender.com/api/auth/';
const API_URL = 'http://localhost:3001/api/auth/';

const AuthService = () => {
    const login = async (username, password) => {
        let response = null;
        try {
            response = await axios.post(
                API_URL + 'signin',
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

        // console.log('vao ay');
        // if (response.data.username) {
        //     localStorage.setItem('user', JSON.stringify(response.data));
        // }
        // console.log(response.data);

        // console.log(API_URL + 'signin');
    };

    const logout = () => {
        localStorage.removeItem('user');
    };

    const register = async (username, email, password) => {
        return await axios.post(API_URL + 'signup', {
            username,
            email,
            password,
        });
    };

    const getCurrentUser = () => {
        return JSON.parse(localStorage.getItem('user'));
    };

    return {
        login: login,
        logout: logout,
        register: register,
        getCurrentUser: getCurrentUser,
    };
};

export default AuthService;
