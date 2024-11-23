// import { logout, setTokens } from "../slices/authSlice";

// const apiMiddleware =
//   ({ dispatch, getState }) =>
//   next =>
//   async action => {
//     // Proceed only if action is an API call
//     if (!action.meta || !action.meta.api) {
//       return next(action);
//     }

//     const { endpoint, method = "GET", body = null, onSuccess, onError } = action.meta;

//     const { accessToken, refreshToken } = getState().auth;

//     try {
//       // Make the API call
//       const response = await fetch(endpoint, {
//         method,
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//           "Content-Type": "application/json",
//         },
//         body: body ? JSON.stringify(body) : null,
//       });

//       // Handle 401 Unauthorized (token expired)
//       if (response.status === 401) {
//         // Refresh token
//         const refreshResponse = await fetch(`${process.env.REACT_APP_API_URL}/auth/refresh`, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ refreshToken }),
//         });

//         if (!refreshResponse.ok) {
//           throw new Error("Token refresh failed");
//         }

//         const { accessToken: newAccessToken, refreshToken: newRefreshToken } = await refreshResponse.json();

//         // Update tokens in Redux and retry original API call
//         dispatch(setTokens({ accessToken: newAccessToken, refreshToken: newRefreshToken }));

//         const retryResponse = await fetch(endpoint, {
//           method,
//           headers: {
//             Authorization: `Bearer ${newAccessToken}`,
//             "Content-Type": "application/json",
//           },
//           body: body ? JSON.stringify(body) : null,
//         });

//         if (!retryResponse.ok) {
//           throw new Error("Retry failed");
//         }

//         const retryData = await retryResponse.json();
//         if (onSuccess) {
//           dispatch({ type: onSuccess, payload: retryData });
//         }
//         return;
//       }

//       // Handle successful response
//       const data = await response.json();
//       if (response.ok && onSuccess) {
//         dispatch({ type: onSuccess, payload: data });
//       }

//       // Handle non-401 errors
//       if (!response.ok && onError) {
//         dispatch({ type: onError, payload: data });
//       }
//     } catch (error) {
//       console.error("API Middleware Error:", error);
//       if (onError) {
//         dispatch({ type: onError, payload: error.message });
//       }
//       // Logout user on token refresh failure
//       if (error.message === "Token refresh failed") {
//         dispatch(logout());
//       }
//     }
//   };

// export default apiMiddleware;
// src/redux/middleware/apiMiddleware.js
const url = import.meta.env.VITE_SOME_KEY;
const apiMiddleware = store => next => async action => {
  if (action?.meta?.api) {
    const { api, endpoint, method, onSuccess, onError, data } = action.meta;
    const { accessToken, refreshToken } = store.getState().auth;

    // Make the API request
    const requestOptions = {
      method: method || "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(data) || null,
    };

    try {
      let response = await fetch(endpoint, requestOptions);

      // If the response is unauthorized, try to refresh the token
      if (response.status === 401 && refreshToken) {
        const refreshResponse = await fetch(`${url}/auth/refresh`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${refreshToken}`,
          },
        });

        if (refreshResponse.ok) {
          const refreshData = await refreshResponse.json();
          const { newAccessToken, newRefreshToken } = refreshData;

          // Update tokens in Redux and retry the original request
          store.dispatch({
            type: "auth/setTokens",
            payload: { accessToken: newAccessToken, refreshToken: newRefreshToken },
          });

          // Retry the original API request with the new access token
          requestOptions.headers.Authorization = `Bearer ${newAccessToken}`;
          response = await fetch(endpoint, requestOptions);
        } else {
          // If token refresh failed, handle the failure (e.g., log out the user)
          store.dispatch({ type: "auth/logout" });
          throw new Error("Session expired. Please log in again.");
        }
      }

      if (!response.ok) {
        const errorData = await response.json();
        store.dispatch({ type: onError, payload: errorData });
        return;
      }

      const responseData = await response.json();
      store.dispatch({ type: onSuccess, payload: responseData });
    } catch (error) {
      store.dispatch({ type: onError, payload: error.message });
    }
  }

  return next(action);
};

export default apiMiddleware;
