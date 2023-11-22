import axios from "axios";
import { BASE_URL } from "../../env";

export const LoginRequest = async (email, password) => {
  const data = { email, password };
  //   console.log(data);

  const res = await axios.post(`${BASE_URL}/login`, JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
  localStorage.setItem("access", JSON.stringify(res.data));
  // const token = JSON.parse(localStorage.getItem("access"));
  // console.log(token);
};
