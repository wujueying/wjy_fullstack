import {axiosInstance} from './config';
// 所有的请求都在这里统一管理
// axios 
// url 改了怎么办？ 
// 首页接口需求
export const getBannerRequest = () => {
  return axiosInstance.get('/banner')
}

export const getRecommendListQuest = () => {
  return axiosInstance.get('/personalized')
  }
// singers 
// export const getSingleListRequest = () => {
//   return axiosInstance.get('/personalized')
// }
