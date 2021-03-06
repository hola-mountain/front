import type {
  GetMountainListForm,
  MountainDetail,
  SignupForm,
  ReviewRegForm,
  UploadSuccess,
  ReviewList,
  PageInfo,
  PageMountainList,
} from "../utils/typeInterface";
import http from "../utils/http";

export const getMountains = async (
  params: GetMountainListForm
): Promise<PageMountainList | undefined> => {
  try {
    const result: PageMountainList = await http.get("/mountain", params);
    return result;
  } catch (e) {
    console.log(e);
  }
};
export const getMountainDetail = async (
  mountainId: string,
  userId: number
): Promise<MountainDetail | undefined> => {
  try {
    const result: MountainDetail = await http.get(
      `/mountain/${mountainId}?userId=${userId}`
    );
    return result;
  } catch (e) {
    console.log(e);
  }
};
export const getMountainReviews = async (
  mountainId: string,
  pageInfo: PageInfo
): Promise<ReviewList[] | undefined> => {
  try {
    const result: ReviewList[] = await http.get(
      `/mountain/${mountainId}/review?pageNum=${pageInfo.pageNum}&pageSize=${pageInfo.pageSize}`
    );
    return result;
  } catch (e) {
    console.log(e);
  }
};
export const registerMountainReview = async (
  mountainId: string,
  params: ReviewRegForm
): Promise<ReviewList | undefined> => {
  try {
    const result: ReviewList = await http.post(
      `/mountain/${mountainId}/review`,
      params
    );
    return result;
  } catch (e) {
    console.log(e);
  }
};
export const thumbnailFileUpload = async (
  id: number,
  file: File
): Promise<UploadSuccess | undefined> => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const result: UploadSuccess = await http.post(
      `/mountain/api/upload/${id}`,
      formData
    );
    return result;
  } catch (e) {
    console.log(e);
  }
};
export const updateMountainReview = async (
  mountainId: number,
  ratingId: number,
  params: ReviewRegForm
): Promise<ReviewList | undefined> => {
  try {
    const result: ReviewList = await http.put(
      `/mountain/${mountainId}/review/${ratingId}`,
      params
    );
    return result;
  } catch (e) {
    console.log(e);
  }
};
export const deleteMountainReview = async (
  mountainId: number,
  reviewId: number,
  userId: number
): Promise<undefined> => {
  try {
    const result = await http.delete(
      `/mountain/${mountainId}/review/${reviewId}?userId=${userId}`
    );
    return result;
  } catch (e) {
    throw Error("error");
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
export const getIsFavoriteMountain = async (
  mountainId: string,
  userId: number
) => {
  try {
    const result = await http.get(`/mountain/${mountainId}/favorite`, {
      userId,
    });
    return result;
  } catch (e) {
    console.log(e);
  }
};
export const addFavoriteMountain = async (
  mountainId: string,
  userId: number
) => {
  try {
    const result = await http.post(`/mountain/${mountainId}/favorite`, {
      userId,
    });
    return result;
  } catch (e) {
    console.log(e);
  }
};
export const removeFavoriteMountain = async (
  mountainId: string,
  userId: number
) => {
  try {
    const result = await http.delete(
      `/mountain/${mountainId}/favorite/${userId}`
    );
    return result;
  } catch (e) {
    console.log(e);
  }
};

export default {
  getMountains,
  getMountainDetail,
  registerMountainReview,
  getMountainReviews,
  thumbnailFileUpload,
  updateMountainReview,
  deleteMountainReview,
};
