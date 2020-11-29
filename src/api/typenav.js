import request from '@utils/request.js'

export const typenav = ()=>{
    return request({
        method:'GETY',
        url:'/product/getBaseCategoryList'
    })
}