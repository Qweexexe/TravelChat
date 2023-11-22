// import axios from "axios";
// import { BASE_URL } from "../../env";
// import { useSelector } from "react-redux";
// import { useToken } from '../../hooks/useToken';

// export const registerUser = async (data) => {
//   const { updateToken } = useToken();
//   const res = await axios.post(`${BASE_URL}/register`, JSON.stringify(data), {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   console.log(res.data);
//   localStorage.setItem("access", JSON.stringify(res.data));
// };
