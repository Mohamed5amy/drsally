import axiosInstance from "./axiosInstance"

// Login
export const LoginRequest = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post("/login", { email, password });
    
    if (response.status === 201) {
      return {
        success: true,
        data: response.data
      };
    } else {
      return {
        success: false,
        error: "Login failed",
        errorType: "unknown"
      };
    }
  } catch (error: any) {
    
    // Handle different error scenarios
    if (error.response?.data?.message) {
      const errorMessage = error.response.data.message;
      
      // Check for specific error types
      if (errorMessage.toLowerCase().includes('verfied') && errorMessage.toLowerCase().includes('code')) {
        return {
          success: false,
          error: errorMessage,
          errorType: "email_not_verified"
        };
      } else if (errorMessage.toLowerCase().includes('invalid') && errorMessage.toLowerCase().includes('email')) {
        return {
          success: false,
          error: errorMessage,
          errorType: "invalid_email"
        };
      } else if (errorMessage.toLowerCase().includes('invalid') && errorMessage.toLowerCase().includes('password')) {
        return {
          success: false,
          error: errorMessage,
          errorType: "invalid_password"
        };
      } else {
        return {
          success: false,
          error: errorMessage,
          errorType: "other"
        };
      }
    }
    
    return {
      success: false,
      error: "An unexpected error occurred",
      errorType: "network"
    };
  }
};

// Register
export const RegisterRequest = async (name : string , email : string , password : string , phone : string) => {
  try {
    const response = await axiosInstance.post("/register", { name, email, password , phone , password_confirmation : password });
    if (response.status == 201) {
      return response.data;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Registration failed:", error);
    return false;
  }
};

// Forget Password
export const ForgetPasswordRequest = async (email : string) => {
  try {
    const response = await axiosInstance.post("/forget-password", { email });
    if (response.status == 200) {
      return response.data;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Registration failed:", error);
    return false;
  }
};

// Reset Password
export const ResetPasswordRequest = async (password : string , random_key : string) => {
  try {
    const response = await axiosInstance.post("/change-password", { password , random_key });
    if (response.status == 200) {
      return response.data;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Change Password failed:", error);
    return false;
  }
};

// Change Password
export const ChangePasswordRequest = async (currentPassword : string , password : string , token : string) => {
  try {
    const response = await axiosInstance.post("/auth/change-password", {currentPassword , password , passwordConfirmation : password} , {
      headers : {
          ...(token ? { Authorization: "Bearer " + token } : {})
      }
    });
    if (response.status == 200) {
      return response.data;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Change Password failed:", error);
    return false;
  }
};

// Email Verification
export const EmailVerificationRequest = async (email : string , code : string) => {
  try {
    const response = await axiosInstance.post("/verified-code", { email , code });
    return response.data;
  } catch (error) {
    console.error("Email Verification failed:", error);
    return false;
  }
};