import request from '@utils/request.js'

export const typenav = ()=>{
    return request({
        method:'GET',
        url:'/product/getBaseCategoryList'
    })
}