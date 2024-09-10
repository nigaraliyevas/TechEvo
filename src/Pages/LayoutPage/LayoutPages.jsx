import HeaderPage from "./HeaderPage/HeaderPage";
import FooterPage from "./FooterPage/FooterPage";

const LeyotPages = ({ children }) => {
  return (
    <div>
      <HeaderPage />
      {children}
      <FooterPage />
    </div>
  );
};

export default LeyotPages;
