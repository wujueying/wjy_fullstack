import request from './request'

export function updateSysInfo (data) {
  return request({
      url: '/api/sysinfo/info',
      method: 'post',
      data,
  })
}