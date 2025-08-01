import axiosInstance from "./axiosInstance";


// Send Contact Request
export const sendContactRequest = async (payload : {}) => {
  const response = await axiosInstance.post("/contacts" , payload);
  return response;
};