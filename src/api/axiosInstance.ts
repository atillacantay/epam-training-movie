import Axios from "axios"

export const moviesApi = Axios.create({ baseURL: process.env.BACKEND_URL })
