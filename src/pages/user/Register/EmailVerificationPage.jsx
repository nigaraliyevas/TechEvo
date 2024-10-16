import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function EmailVerificationPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Get the token from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    console.log(token);
    const email = localStorage.getItem("email");

    if (token && email) {
      // Send both token and email to the backend
      fetch("http://ec2-54-146-26-87.compute-1.amazonaws.com:8081/api/v1/auth/activate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          token: token,
        }),
      })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            // If verification is successful, navigate to RegisterPage2
            navigate("/registerPage2");
          } else {
            // Handle the error case (e.g., show an error message)
            console.error("Aktivasiya uğursuz oldu.");
          }
        })
        .catch((error) => {
          console.error("Error during verification:", error);
        });
    }
  }, [navigate]);

  return <div
    style={{
      color: "white",
      fontSize: "24px",
      fontWeight: "bold",
      marginTop: "100px",
    }}
  >Zəhmət olmasa E-poçt hesabınızdakı linkə keçid edin.</div>;
}
