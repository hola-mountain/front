import { Notify } from "quasar";

export const inputRequiredValidation = (val: string): boolean => {
  return !!val;
};

export const successAlert = (msg: string) => {
  Notify.create({
    message: msg,
    position: "top",
    type: "positive",
    timeout: 1500,
  });
};
export const errorAlert = (msg: string) => {
  Notify.create({
    message: msg,
    position: "top",
    type: "negative",
    timeout: 1500,
  });
};
export const warningAlert = (msg: string) => {
  Notify.create({
    message: msg,
    position: "top",
    type: "warning",
    timeout: 1000,
  });
};

export default {
  inputRequiredValidation,
  successAlert,
  errorAlert,
  warningAlert,
};
