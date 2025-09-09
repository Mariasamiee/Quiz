import axios from "axios"

const BASE_URL = "https://68bf2feb9c70953d96eefe16.mockapi.io/api"
const api = axios.create({
    baseURL: BASE_URL
})
export default api