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
  comment: string;
  star: number;
  userId: number;
  thumbImg: File | null;
  nickname: string;
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
export interface MountainDetail {
  mountainId: number;
  name: string;
  latitude: number;
  longitude: number;
  height: number;
  hikingLevel: number;
  viewLevel: number;
  attractLevel: number;
  description: string;
  images: string[];
}
