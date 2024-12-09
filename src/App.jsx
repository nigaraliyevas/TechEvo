import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import UserRouter from "./router/UserRouter";
import { useState, useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import AdminRouter from "./router/AdminRouter";
import ReactGA from "react-ga4";

const App = () => {
  const [exist, setExist] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const refreshToken = () => {
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
        if (data.accessToken) {
          localStorage.setItem("accessToken", data.accessToken);
          localStorage.setItem("refreshToken", data.refreshToken);
        }
      })
      .catch(error => {
        console.error("Error refreshing token:", error);
      });
  };

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
  // useEffect(() => {
  //   ReactGA.initialize("G-NS1ZF3HPR5"); // Replace with your Tracking ID
  //   ReactGA.send("pageview");
  // }, []);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-NS1ZF3HPR5";
    script.async = true;
    document.head.appendChild(script);

    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-NS1ZF3HPR5");
  }, []);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/*" element={<UserRouter exist={exist} setExist={setExist} confirm={confirm} setConfirm={setConfirm} />} />
          <Route path="/admin/*" element={<AdminRouter />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;