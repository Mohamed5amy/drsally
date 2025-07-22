import axiosInstance from "./axiosInstance"

// Days
export const getDays = async (start_date : string , end_date : string , duration : string , token : string) => {
  try {
    const response = await axiosInstance.request({
        url: "/availability/between-dates",
        method: "GET",
        params: {
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
// Slots
export const getSlots = async (date : string , duration : string , token : string) => {
  try {
    const response = await axiosInstance.request({
        url: "/availability/by-date",
        method: "GET",
        params: {
            date,
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
    console.log(date , duration)
    return false;
  }
};
// Book
export const bookRequest = async (token : string , payload : {}) => {
  try {
    const response = await axiosInstance.post("/customer-booking", payload , {
      headers: {
          Authorization: "Bearer " + token
      }
    });
    if (response.status == 201) {
      return response.data;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Booking failed:", error);
    return false;
  }
};
// questions
export const questionsRequest = async (token : string , payload : {}) => {
  try {
    const response = await axiosInstance.post("/customer-question", payload , {
      headers: {
          Authorization: "Bearer " + token
      }
    });
    if (response.status == 201) {
      return response.data;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Questions failed:", error);
    return false;
  }
};
// Checkout URL
export const getCheckoutUrl = async (token : string , id : number) => {
  try {
    const response = await axiosInstance.post("/create-stripe-url", { id } , {
      headers: {
          Authorization: "Bearer " + token
      }
    });
    if (response) {
      return response.data;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Checkout URL failed:", error);
    return false;
  }
};
// Rebook
export const rebookRequest = async (token : string , id : number , payload : {}) => {
  try {
    const response = await axiosInstance.post("/update-customer-booking/" + id, payload , {
      headers: {
          Authorization: "Bearer " + token
      }
    });
    if (response) {
      return response.data;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Booking failed:", error);
    return error;
  }
};