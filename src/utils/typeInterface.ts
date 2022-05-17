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
export interface GetMountainListForm {
  pageNum: number;
  pageSize: number;
  district: string;
  isAsc: boolean;
  sortBy: string;
}
export interface MountainList {
  mountainId: number;
  name: string;
  shortDescription: string;
  images: string[];
}
