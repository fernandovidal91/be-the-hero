import axios from 'axios';

const api = axios.create({
    baseURL: 'http://seu_ip_do_computador:3333'
});

export default api;
