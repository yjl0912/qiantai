import axios from 'axios'
import { Message } from 'element-ui';
import getUserTempId from "@utils/getUserTempId";

import NProgress  from 'nprogress'
import 'nprogress/nprogress.css' //引入样式，在他的包里面


const userTempId = getUserTempId();
const instance = axios.create({
    baseURL:"/api",
    // headers:{
    //     //token:'xxx'    //但是登录接口不需要
    // }
}) ;

instance.interceptors.request.use(
    (config)=>{
        // if(token){
        //     header:{
        //         token:xxx
        //     }
        // }
        NProgress.start();
        config.headers.userTempId = userTempId;
        return config;
    }

)

instance.interceptors.response.use(
    
    (response)=>{
        NProgress.done();  
     if(response.data.code ===200){
         return response.data.data;
     }
     Message.error(response.data.message)
     return Promise.reject(response.data.message)
    },
    (error)=>{
        NProgress.done();
        const message = error.message || '网络错误';
        Message.error(message)
        return Promise.reject(message);
        
    }
);

export default instance;