import { envVars } from "@/config/env";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: envVars.BASE_URL,
});

axiosInstance.interceptors.request.use(
function(config){
    console.log("Axios",config)
    return config
},
function(error){
    return Promise.reject(error)
}
)

axiosInstance.interceptors.response.use(
function onFulfilled(response){
    console.log("Axiosss",response)
    return response
},
function onRejected(error){
    return Promise.reject(error)
}

)