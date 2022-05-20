import type {
  BadgeList,
  FavoriteMountainList,
  MyInfo,
  ReviewList,
  SigninForm,
  SigninResponce,
  SignupForm,
} from "../utils/typeInterface";
import http from "../utils/http";

export const signin = async (params: SigninForm) => {
  try {
    const result = http.post("/users/login", params);
    return result;
  } catch (e) {
    console.log(e);
  }
};
export const signup = async (
  params: SignupForm
): Promise<SigninResponce | undefined> => {
  try {
    const result = await http.post("/users/join", params);
    return result;
  } catch (e) {
    console.log(e);
  }
};
export const getMyProfile = async (
  userId: number
): Promise<MyInfo | undefined> => {
  try {
    const result: MyInfo = await http.get(`/mypage/myInfo/${userId}`);
    return result;
  } catch (e) {
    console.log(e);
  }
};
export const getMyBadges = async (
  userId: number
): Promise<BadgeList[] | undefined> => {
  try {
    const result: BadgeList[] = await http.get(`/mypage/badges/${userId}`);
    return result;
  } catch (e) {
    console.log(e);
  }
};
export const getFavoriteMountainList = async (
  userId: number
): Promise<FavoriteMountainList[] | undefined> => {
  try {
    const result: FavoriteMountainList[] = await http.get(
      `/mypage/users/favorite/${userId}`
    );
    return result;
  } catch (e) {
    console.log(e);
  }
};
export const getMyReviewList = async (
  userId: number
): Promise<ReviewList[] | undefined> => {
  try {
    const result: ReviewList[] = await http.get(
      `/mypage/users/review/${userId}`
    );
    return result;
  } catch (e) {
    console.log(e);
  }
};

export default {
  signin,
  signup,
  getMyProfile,
  getMyBadges,
  getFavoriteMountainList,
  getMyReviewList,
};
