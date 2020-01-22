import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID bccce572245ba8ca60f86446c8ee05244d62ac15634ab82ea4cbbf8ad8ea4f01'
    }
})