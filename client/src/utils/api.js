import axios from "axios";

//backend url
const instance = axios.create({
  baseURL: "https://ajay-wealthup-2y65.vercel.app/",
});

export const getCode = async () => {
  try {
    const response = await instance.get("/api/codes");
    return response.data.code;
  } catch (error) {
    console.error("Error fetching code:", error);
    throw error;
  }
};

export const checkCode = async (code) => {
  try {
    const response = await instance.post("/api/codes/use", { code });
    return response.data;
  } catch (error) {
    console.error("Error using code:", error);
    throw error;
  }
};
