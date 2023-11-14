import axios from "axios";
import { BASE_URL } from "../../env";
import { useSelector } from "react-redux";

export const registerUser = async (data) => {
  const res = await axios.post(`${BASE_URL}/register`, JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(res.data);
  localStorage.setItem("access", res.data);
};
