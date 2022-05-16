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
export interface ReviewRegForm {
  title: string;
  content: string;
  rating: number;
  img: File | null;
}
