import HeaderPage from "./HeaderPage/HeaderPage";
import FooterPage from "./FooterPage/FooterPage";

const LeyotPages = ({ children }) => {
  return (
    <div style={{backgroundColor:"black", width:"100%",height:"100vh"}}>
      <HeaderPage />
      {children}
      <FooterPage />
    </div>
  );
};

export default LeyotPages;
