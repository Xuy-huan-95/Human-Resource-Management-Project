import axios from 'axios'

const http = axios.create({
  baseURL: 'https://em-v2.oceantech.com.vn/em/'
})

http.interceptors.request.use(
  function (config) {
    const user = localStorage.getItem('user')
    const accetoken = user ? JSON.parse(user) : null;

    if (config.url !== '/oauth/token') {
      const token = `Bearer ${accetoken.access_token}`
      config.headers.Authorization = token
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response && (error.response.status === '401' || error.response.status === '403')) {
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)
export default http
