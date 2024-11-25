import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import UserRouter from "./router/UserRouter";
import { useState, useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const App = () => {
  const [exist, setExist] = useState(false);
  const [confirm, setConfirm] = useState(false);

  // Function to handle token refresh
  const refreshToken = () => {
    console.log("Refreshing token...");
    const base = import.meta.env.VITE_SOME_KEY;
    const url = `${base}auth/refresh`; 

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("refreshToken")}`, 
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to refresh token");
        }
        return response.json();
      })
      .then(data => {
        // Save the new access and refresh tokens
        if (data.accessToken) {
          localStorage.setItem("accessToken", data.accessToken);
          localStorage.setItem("refreshToken", data.refreshToken);
        }
        console.log("Token refreshed successfully:", data);
      })
      .catch(error => {
        console.error("Error refreshing token:", error);
      });
  };

  // Persistent interval logic
  useEffect(() => {
    const intervalTime = 120000; 
    const lastRefreshTimeKey = "lastRefreshTime";

    const calculateNextInterval = () => {
      const lastRefreshTime = localStorage.getItem(lastRefreshTimeKey);
      if (lastRefreshTime) {
        const elapsedTime = Date.now() - Number(lastRefreshTime);
        return Math.max(intervalTime - elapsedTime, 0);
      }
      return intervalTime;
    };

    const startRefreshInterval = () => {
      const nextInterval = calculateNextInterval();
      setTimeout(() => {
        refreshToken();
        localStorage.setItem(lastRefreshTimeKey, Date.now());
        setInterval(() => {
          refreshToken();
          localStorage.setItem(lastRefreshTimeKey, Date.now());
        }, intervalTime);
      }, nextInterval);
    };

    if (localStorage.getItem("accessToken")) {
      startRefreshInterval();
    }
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/*" element={<UserRouter exist={exist} setExist={setExist} confirm={confirm} setConfirm={setConfirm} />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
