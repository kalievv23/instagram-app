import axios from "axios";
export const MAIN_URL = "https://localhost:7055";

const $api = axios.create({ baseURL: MAIN_URL });

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
  )}`;
  return config;
});
export default $api;
