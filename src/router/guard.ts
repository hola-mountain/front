import { useUserStore } from "@/stores/user";
import { errorAlert } from "@/utils/common";

export default (to: any, from: any, next: any) => {
  const userStore = useUserStore();
  const authList = userStore.getAccessToken;

  if (!authList) {
    errorAlert("페이지에 접근 권한이 없습니다. 로그인 후 이용해주세요.");
    next(from);
  } else {
    next();
  }
};
