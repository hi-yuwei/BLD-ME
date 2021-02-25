import http from './config'

export const getCode = params => http.post('rest/user/captchCode.json', { params })
