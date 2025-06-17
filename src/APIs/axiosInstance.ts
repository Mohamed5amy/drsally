import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://doctor.mssmsolutions.com/api",
  headers: {
    "Accept": "application/json",
  },
});

export default axiosInstance;