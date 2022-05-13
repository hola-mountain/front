import { Notify } from "quasar";

export const inputRequiredValidation = (val: string): boolean => {
  return !!val;
};

export const successAlert = (msg: string) => {
  Notify.create({
    message: msg,
    position: "top",
    type: "positive",
  });
};
export const errorAlert = (msg: string) => {
  Notify.create({
    message: msg,
    position: "top",
    type: "negative",
  });
};

export default {
  inputRequiredValidation,
  successAlert,
  errorAlert,
};
