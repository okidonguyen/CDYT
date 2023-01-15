import axios from 'axios';

const host = 'http://localhost:3001/api';

export const apiBlogDetails = (id) => {
    return axios.get(`${host}/admin/post-details/${id}`);
}

export const apiAllBlogs = (args) => {
    return axios.get(`${host}/admin/posts`, { params: args});
}

export const apiCreateBlog = (args) => {
    return axios.post(`${host}/admin/post-create`, args);
}

export const apiUpdateBlog = (args) => {
    return axios.put(`${host}/admin/post-update`, args);
}
