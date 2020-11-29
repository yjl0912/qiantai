import axios from 'axios'

const instance = axios.create({
    baseURL:"/api",
    // headers:{
    //     //token:'xxx'    //但是登录接口不需要
    // }
}) ;

instance.interceptors.request.use(
    // (config)=>{
    //     // if(token){
    //     //     header:{
    //     //         token:xxx
    //     //     }
    //     // }
    // }
)

instance.interceptors.response.use(
    (response)=>{
     if(response.data.code ===200){
         return response.data.data;
     }
     return Promise.reject(response.data.message)
    },
    (error)=>{
        const message = error.message || '网络错误';
        return Promise.reject(message);
    }
);

export default instance;