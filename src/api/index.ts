import http from '../http'
//请求示例

// get 
export const pk = (params: any) => http.get('/activity/chery_num_winner/pk', { params })


// post, code
export const test = (params: any, config = {}) => http.post('/activityall/summer2022/user', JSON.stringify(params), config)

// getOpenId
export const getOpenId = (params: any, config = {}) => http.post('/activity/chery_num_winner/customer', params, config)

export const getWxInfo = (params: any) => http.post('/activityall/index/signPackage', JSON.stringify(params))