import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTokens } from "../redux/slices/TokenSlice";
// import { setUser } from "../redux/slice/userSlice";

const useLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = async (email, password) => {

    try {
        const url = import.meta.env.API_URL
        console.log(url);
      const response = await fetch(
        `http://ec2-51-20-32-195.eu-north-1.compute.amazonaws.com:8081/api/v1/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      const { refreshToken, accessToken } = data;

      dispatch(setTokens({ accessToken, refreshToken }));
      // dispatch(setUser(email));

      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("email", email);

      toast.success(`${email} logged in.`);
      console.log(localStorage.getItem('refreshToken'))
      navigate("/");
    } catch (error) {
      toast.error("Login failed");
      console.error(error);
    }
  };
  return login;
};

export default useLogin;
