import axios from 'axios'
//import 'dotenv/config'

const api = axios.create({
  baseURL: 'http://localhost:4444'
})

export default api;