export interface SignupForm {
  email: string;
  nickName: string;
  password: string;
}
export interface SigninForm {
  nickName: string;
  password: string;
}
export interface SigninResponce {
  userId: number;
  accessToken: string;
  refreshToken: string;
}
