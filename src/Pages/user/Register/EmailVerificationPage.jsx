import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function EmailVerificationPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Get the token from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    const email = localStorage.getItem("email");

    if (token && email) {
      // Send both token and email to the backend
      fetch("https://0605-5-133-233-247.ngrok-free.app/api/v1/auth/activate", {
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
          if (response.ok) {
            // If verification is successful, navigate to RegisterPage2
            navigate("/registerPage2");
          } else {
            // Handle the error case (e.g., show an error message)
            console.error("Verification failed");
          }
        })
        .catch((error) => {
          console.error("Error during verification:", error);
        });
    }
  }, [navigate]);

  return <div>Zəhmət olmasa E-poçt hesabınızdakı linkə keçid edin.</div>;
}
