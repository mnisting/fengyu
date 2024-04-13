// 导入axios  =》 别忘记了安装
import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'
// 创建 request 实例
const request = axios.create({
    baseURL: '/ftyyptapi',
    headers: {
        'content-type': 'application/x-www-form-urlencoded'
    }
})
// 拦截器
request.interceptors.request.use(
    (config) => {
        // config.headers.token =
        //   localStorage.getItem('token') ||
        //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2OTgzMDE5OTd9.wzWmcI6oGeGqOGwsERbZ30_r2Cj0yyRvoW8GDRWFR9o'
        // 分析1：用户登录成功存的是  localStorage.getItem('info')
        // 分析2：localStorage.getItem('info')  获取到了json格式 获取不到 null
        // 分析3：JSON.parse(数据)  json格式-返回对象，null-返回null
        // 分析4：对象.键  没问题   null.键  报错
        config.headers.token = JSON.parse(localStorage.getItem('info') as string)?.token // 切记不同用户登录后的token不一样
        return config
    },
    (error) => Promise.reject(error)
)
request.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => Promise.reject(error)
)
// 导出
// - axios当对象使用
// - 定义一个空函数
// - 把1放到2中并返回
// - 形参 url、params、options
// - 类型 string、object、axios中、返回的类型:Promise<T>
const get = <T = any>(
    url: string = '',
    params: object = {},
    options: AxiosRequestConfig = {}
): Promise<T> => {
    // return request.get(请求地址,{   headers:{},timeout:6000, params:{}   })
    return request.get(url, { ...options, params })
}

const del = <T = any>(
    url: string = '',
    params: object = {},
    options: AxiosRequestConfig = {}
): Promise<T> => {
    // return request.get(请求地址,{   headers:{},timeout:6000, params:{}   })
    return request.delete(url, { ...options, params })
}

const post = <T = any>(
    url: string = '',
    data: object = {},
    options: AxiosRequestConfig = {}
): Promise<T> => {
    //   return request.post(请求地址, data, { headers: {}, timeout: 6000 })
    return request.post(url, data, options)
}

const put = <T = any>(
    url: string = '',
    data: object = {},
    options: AxiosRequestConfig = {}
): Promise<T> => {
    //   return request.post(请求地址, data, { headers: {}, timeout: 6000 })
    return request.put(url, data, options)
}

export default {
    get,
    del,
    post,
    put
}
