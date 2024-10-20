import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function EmailVerificationPage() {
  const navigate = useNavigate();

  useEffect(() => {
    
    const verifyToken = async() => {
      // Get the token from the URL
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get("token");
      
      console.log(token);
      const email = localStorage.getItem("email");
      
      if (token && email) {
        try {
          const response = await fetch('http://ec2-54-146-26-87.compute-1.amazonaws.com:8081/api/v1/auth/activate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email:email,
              token: token,
            }),
          });

          if(response.status === 200) {
            localStorage.setItem('isVerified', 'true');
            navigate("/registerpage2");
          }
          else {
            console.log('Verification failed: ', response.status);            
          }
        } catch(error) {
          console.log('Error: ', error);
        }
      }

    }

    verifyToken();
  }, [navigate]);

  return <div
    style={{
      color: "white",
      fontSize: "24px",
      fontWeight: "bold",
      marginTop: "100px",
    }}
  >Hesabınız aktivləşdirilir.</div>;
}
