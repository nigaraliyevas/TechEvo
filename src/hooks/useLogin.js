import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTokens } from "../redux/slices/TokenSlice";
// import Cookies from "js-cookie";

const useLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const url = import.meta.env.VITE_SOME_KEY;

  const login = async (email, password) => {
    try {
      const response = await fetch(`${url}auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json(); 
        throw new Error("Login failed");
      }

      const data = await response.json();
      const { refreshToken, accessToken } = data;

      // Set tokens in Redux and localStorage
      dispatch(setTokens({ accessToken, refreshToken }));
      localStorage.setItem("refreshToken", refreshToken);

      // Cookies.set("refreshToken", refreshToken, {
      //   expires: 30, // Token expiry 
      //   secure: true, // Ensures HTTPS
      //   sameSite: "Strict", // Prevents CSRF
      // });

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("email", email);

      toast.success(`${email} logged in.`);
      navigate("/");
    } catch (error) {
      toast.error("Login failed");
      console.log(error);
      throw error;
    }
  };

  return login;
};

export default useLogin;
