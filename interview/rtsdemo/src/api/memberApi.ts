import {MemberEntity} from '../model/member'
import Axios, { AxiosResponse } from 'axios';
// 后台前缀基本一样  
const githubURL = "https://api.github.com";
// 业务API不要去重复写一样的前缀 
const githubMembersUrl = `${githubURL}/orgs/lemoncode/members`;
export const getmemberCollection = ():Promise<MemberEntity[]> => {
  // 使用try catch 处理了网络请求错误
  return new Promise((resolve,reject) => {
    try{
      Axios.get<MemberEntity[]>(githubMembersUrl)
          .then(response=>{
            resolve(mapMemberListApiToModel(response))
          })
    }catch(err){
      reject(err)
    }
  })
} 
// ts 无法推导类型的就会报错 
const mapMemberListApiToModel = ({
  data
}:AxiosResponse<MemberEntity[]>):MemberEntity[]=> data.map(githubMember => ({
  id: githubMember.id,
  login: githubMember.login,
  avatar_url: githubMember.avatar_url
}))
