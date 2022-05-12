import { errorAlert } from "../utils/common";
import type { SignupForm } from "../utils/typeInterface";
import http from "../utils/http";

export const signin = async () => {
  try {
    const result = http.get("/users/login");
  } catch (e) {
    errorAlert("오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
  }
};
export const signup = async (params: SignupForm) => {
  try {
    const result = http.post("/users/join", params);
    return result;
  } catch (e) {
    errorAlert("오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
  }
};

export default {
  signin,
  signup,
};
