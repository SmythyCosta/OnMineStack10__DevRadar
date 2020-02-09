import axios from 'axios'

const api = axios.create({
  //baseURL: 'http://localhost:4444'
  baseURL: 'http://192.168.1.17:4444'
})

export default api