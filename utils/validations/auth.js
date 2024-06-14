import { object, string } from "yup";
export const initialValuesLogin = {
  email: "ceyhun@gmail.com",
  password: "Ceyhungl55",
};
export const validationLogin = object({
  email: string()
    .email("Lütfen geçerli bir email adresi giriniz.")
    .required("Lütfen email adresinizi giriniz."),
  password: string().required("Lütfen parolanızı giriniz."),
});

export const initialValuesRegister = {
  firstName: "",
  lastName: "",
  title: "",
  email: "",
  password: "",
};
export const validationRegister = object({
  firstName: string().required("Lütfen adınızı giriniz."),
  lastName: string().required("Lütfen soyadınızı giriniz."),
  title: string().required("Lütfen başlık giriniz."),
  email: string()
    .email("Lütfen geçerli bir email adresi giriniz.")
    .required("Lütfen email adresinizi giriniz."),
  password: string().required("Lütfen parolanızı giriniz."),
});

export const validationAccount = object({
  firstName: string().required("Lütfen adınızı giriniz."),
  lastName: string().required("Lütfen soyadınızı giriniz."),
  title: string().required("Lütfen başlık giriniz."),
});
