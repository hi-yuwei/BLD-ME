import axios from 'axios'

// 创建axios实例
const service = axios.create({
    baseURL: 'https://cte2-erp.car-me.com/'
})

// request拦截器
service.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// response拦截器
service.interceptors.response.use(
    response => {
        return Promise.resolve(response)
    },
    error => {
        return Promise.reject(error)
    }
)

export default service
