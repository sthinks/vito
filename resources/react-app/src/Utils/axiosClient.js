import axios from 'axios'
const AxiosClient = axios.create({
  baseURL: ``,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default AxiosClient
