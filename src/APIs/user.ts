import axiosInstance from "./axiosInstance"

// Get PRofile Data
export const getProfileData = async (token : string) => {
  const response = await axiosInstance.get("/profile" , {
    headers : {
      Authorization : "Bearer " + token
    }
  });
  return response.data.data.user;
};

// Edit Profile
export const editProfile = async (token : string , payload : {name : string ; email : string ; phone : string; password? : string}) => {
  try {
    const response = await axiosInstance.post("/update-profile" , {...payload , password_confirmation : payload.password} , {
      headers : {
        Authorization : "Bearer " + token,
      }
    });
    return response.data;
  } catch (err) {
    return err
  }
};