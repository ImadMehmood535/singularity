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

const MAX_FILE_SIZE = 1024 * 1024; // 1 MB
const validFileExtensions = ["pdf", "docx"];

const isValidFileType = (fileName) => {
  const extension = fileName.split(".").pop();
  return validFileExtensions.includes(extension);
};

export const careerSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  file: yup
    .mixed()
    .required("File is required")
    .test("fileSize", "File is too large", (value) => !value || (value[0] && value[0].size <= MAX_FILE_SIZE))
    .test("fileType", "Unsupported File Format", (value) => !value || (value[0] && isValidFileType(value[0].name))),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  message: yup.string().required("Message is required"),
});