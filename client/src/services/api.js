import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:8000' });

export const fetchAllProducts = () => API.get('/fetchAllProducts');
export const fetchProductById = (id) => API.get(`/fetchProductById/${id}`);
export const addProductToCart = (id) => API.get(`/addProductToCart/${id}`);
export const userSignup = (user) => API.post('/user/signup', user);