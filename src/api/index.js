import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL_SERVER;

const API = axios.create({
  baseURL: BASE_URL,
});

API.newsLetter = (data) => {
  return API.post("/newsletter", data);
};

// contact-form
API.contact = (data) => {
  return API.post("/contact", data);
};

API.landingContact = (data) => {
  return API.post("/landing-page", data);
};

export { API };
