export type {IsendOtp,ILogin,IVerifiedOtp,ILoginResponse} from "./auth.type"

export interface IResponse<T> {
    StatusCodes: number
    success: boolean
    message: string
    data: T
  }