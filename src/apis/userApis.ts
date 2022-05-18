import type {
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
export const getMyProfile = async (userId: number): Promise<any> => {
  try {
    const result = await http.get(`/mypage/myInfo`, { userId });
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};
export const getMyBadges = async (userId: number): Promise<any> => {
  try {
    const result = await http.get(`/mypage/badges`, { userId });
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

export default {
  signin,
  signup,
  getMyProfile,
  getMyBadges,
};
