import * as yup from "yup";

export const landingcontactSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  company: yup.string().required("Company name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: yup
    .string()
    .min(4, "Phone number is required")
    .required("Phone number is required"),
  country: yup.string().required("Country is required"),
  service: yup.string().required("Service is required"),
});