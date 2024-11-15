// import toast from "react-hot-toast";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { setTokens } from "../redux/slices/TokenSlice";

// const useLogin = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const url = import.meta.env.VITE_SOME_KEY;

//   const login = async (email, password) => {
//     try {
//       const response = await fetch(${url}auth/login, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (!response.ok) {
//         throw new Error("Login failed");
//       }

//       const data = await response.json();
//       const { refreshToken, accessToken } = data;

//       // Set tokens in Redux and localStorage
//       dispatch(setTokens({ accessToken, refreshToken }));
//       localStorage.setItem("refreshToken", refreshToken);
//       localStorage.setItem("accessToken", accessToken);
//       localStorage.setItem("email", email);

//       toast.success(${email} logged in.);
//       navigate("/");

//       // Set interval for token refresh every 10 minutes
//       setInterval(async () => {
//         try {
//           const storedRefreshToken = localStorage.getItem("refreshToken");
//           if (!storedRefreshToken) {
//             throw new Error("No refresh token found");
//           }

//           const refreshResponse = await fetch(${url}auth/refresh, {
//             method: "POST",
//             headers: {
//               Authorization: Bearer ${storedRefreshToken},
//               "Content-Type": "application/json",
//             },
//           });

//           if (!refreshResponse.ok) {
//             throw new Error("Token refresh failed");
//           }

//           const refreshData = await refreshResponse.json();
//           const { newAccessToken, newRefreshToken } = refreshData;

//           // Update tokens in Redux and localStorage
//           dispatch(setTokens({ accessToken: newAccessToken, refreshToken: newRefreshToken }));
//           localStorage.setItem("accessToken", newAccessToken);
//           localStorage.setItem("refreshToken", newRefreshToken);
//         } catch (refreshError) {
//           console.error("Token refresh error:", refreshError);
//           toast.error("Session expired. Please log in again.");
//           // Handle token refresh failure (e.g., log out the user)
//         }
//       }, 10 * 60 * 1000); // 10 minutes in milliseconds
//     } catch (error) {
//       toast.error("Login failed");
//       console.error(error);
//     }
//   };

//   return login;
// };

// export default useLogin;