import { Notify } from "quasar";

export const inputRequiredValidation = (val: string): boolean => {
  return !!val;
};

export const successAlert = (msg: string) => {
  Notify.create({
    message: msg,
    position: "top",
  });
};
export const errorAlert = (msg: string) => {
  Notify.create({
    message: msg,
    position: "top",
  });
};

export default {
  inputRequiredValidation,
  successAlert,
  errorAlert,
};
