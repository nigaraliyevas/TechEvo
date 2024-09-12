import HeaderPage from "./HeaderPage/HeaderPage";
import FooterPage from "./FooterPage/FooterPage";

const LeyotPages = ({ children }) => {
  return (
    <div style={{backgroundColor:"black"}}>
      <HeaderPage />
      {children}
      <FooterPage />
    </div>
  );
};

export default LeyotPages;
