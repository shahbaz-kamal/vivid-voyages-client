export interface IsendOtp {
  email:string,
  name?:string
}
export interface ILogin {
  email:string,
  password:string
}
export interface IVerifiedOtp {
  email:string,
  otp:string
}

export interface ILoginResponse {
  accessToken:string,
  refreshToken:string
}
