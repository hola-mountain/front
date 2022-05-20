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
  nickname: string;
}
export interface GetMountainListForm {
  pageNum: number;
  pageSize: number;
  district: string;
  isAsc: boolean;
  sortBy: string;
  search: string;
}
export interface PageMountainList {
  totalPageSize: number;
  mountainResp: MountainList[];
}
export interface MountainList {
  mountainId: number;
  name: string;
  shortDescription: string;
  image: string[];
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
  image: string[];
  favorite: number;
}

export interface UploadSuccess {
  status: string;
  keys: string[];
}

export interface ReviewList {
  comment: string;
  id: number;
  mountainId: number;
  nickname: string;
  ratingId: number;
  star: number;
  thumbImg: string | null;
  title: string;
  userId: number;
  name: string;
}

export interface PageInfo {
  pageNum: number;
  pageSize: number;
}

export interface MyInfo {
  email: string;
  nickName: string;
}
export interface BadgeList {
  achievementId: number;
  achievementNum: number;
  badgeId: number;
  badgeType: string;
  userId: number;
}
export interface FavoriteMountainList {
  image: string[];
  mountainId: number;
  name: string;
  ratingId: null | number;
  regdate: null | number[];
  shortDescription: string;
}
