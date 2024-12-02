import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTokens } from "../redux/slices/TokenSlice";

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
        throw new Error("Login failed");
      }

      const data = await response.json();
      const { refreshToken, accessToken } = data;

      // Set tokens in Redux and localStorage
      dispatch(setTokens({ accessToken, refreshToken }));
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("email", email);

      toast.success(`${email} logged in.`);
      navigate("/");
    } catch (error) {
      toast.error("Login failed");
      console.error(error);
    }
  };

  return login;
};

export default useLogin;