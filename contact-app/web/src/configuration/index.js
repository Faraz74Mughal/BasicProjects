import axios from "axios"
const protocol = 'http';
const ip = "localhost";
const port ="3001";
const URL = `${protocol}://${ip}:${port}/`;
const baseUrl = axios.create({
    baseURL:URL
})
export default baseUrl

