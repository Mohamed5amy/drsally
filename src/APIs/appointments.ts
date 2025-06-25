import axiosInstance from "./axiosInstance"

// Register
export const getDays = async (start_date : string , end_date : string , duration : string , token : string) => {
  try {
    const response = await axiosInstance.request({
        url: "/availability/between-dates",
        method: "GET",
        data: {
            start_date,
            end_date,
            duration
        },
        headers: {
            Authorization: "Bearer " + token
        }
    });
    if (response.data.status === true) {
      return response.data.data;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Get Appointment:", error);
    return false;
  }
};