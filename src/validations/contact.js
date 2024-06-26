import * as yup from "yup";

export const contactSchema = yup.object().shape({
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
  message: yup.string().required("Message is required"),
});
