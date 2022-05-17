import type {
  MountainList,
  GetMountainListForm,
  SignupForm,
} from "../utils/typeInterface";
import http from "../utils/http";

export const getMountains = async (
  params: GetMountainListForm
): Promise<MountainList[] | undefined> => {
  try {
    const result: MountainList[] = await http.get("/mountain", params);
    return result;
  } catch (e) {
    console.log(e);
  }
};
export const getMountainDetail = async (
  mountainId: string
): Promise<undefined> => {
  try {
    const result = await http.get(`/mountain/${mountainId}`);
    return result;
  } catch (e) {
    console.log(e);
  }
};
export const getMountainReviews = async (
  mountainId: string
): Promise<undefined> => {
  try {
    const result = await http.get(`/mountain/${mountainId}/review`);
    return result;
  } catch (e) {
    console.log(e);
  }
};
export const registerMountainReview = async (
  mountainId: string,
  params: SignupForm
): Promise<undefined> => {
  try {
    const result = await http.post(`/mountain/${mountainId}/review`, params);
    return result;
  } catch (e) {
    console.log(e);
  }
};
export const updateMountainReview = async (
  mountainId: string,
  ratingId: string
): Promise<undefined> => {
  try {
    const result = await http.put(`/mountain/${mountainId}/review/${ratingId}`);
    return result;
  } catch (e) {
    console.log(e);
  }
};
export const deleteMountainReview = async (
  params: SignupForm
): Promise<undefined> => {
  try {
    const result = await http.post("/users/join", params);
    return result;
  } catch (e) {
    console.log(e);
  }
};
export const recommendMountainReview = async (
  params: SignupForm
): Promise<undefined> => {
  try {
    const result = await http.post("/users/join", params);
    return result;
  } catch (e) {
    console.log(e);
  }
};

export default {
  getMountains,
  getMountainDetail,
};
