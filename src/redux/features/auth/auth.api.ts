import { baseApi } from "@/redux/baseApi";
import type { ILogin, ILoginResponse, IResponse, IsendOtp, IVerifiedOtp } from "@/types";




const authApi=baseApi.injectEndpoints({
    endpoints:(builder)=>({
      register:builder.mutation({
       query:(userInfo)=>({
        url:"/user/register",
        method:"POST",
        data:userInfo
       })
      }),
      login:builder.mutation<IResponse<ILoginResponse>,ILogin>({
       query:(userInfo)=>({
        url:"/auth/login",
        method:"POST",
        data:userInfo
       })
      }),
      sendOtp:builder.mutation<IResponse<null>,IsendOtp>({
       query:(userInfo)=>({
        url:"/otp/send",
        method:"POST",
        data:userInfo
       })
      }),
      verifyOtp:builder.mutation<IResponse<null>,IVerifiedOtp>({
       query:(userInfo)=>({
        url:"/otp/verify",
        method:"POST",
        data:userInfo
       })
      }),
    })
})

export const {useRegisterMutation,useLoginMutation,useSendOtpMutation,useVerifyOtpMutation}=authApi