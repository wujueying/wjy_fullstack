import axios from '../utils/axios'

export function register(params){
   return axios.post('/user/register',params)  // 左边是接口，右边是参数
}

export function login(params){
  return axios.post('/user/login',params)
}

