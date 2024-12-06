const Header = () => {
  return (
    <div>
      <div className="col-12 d-flex justify-content-between align-items-center mb-4">
        <h2>21 Noyabr, 2024</h2>
        <div className="d-flex align-items-center">
          <input type="text" className="form-control me-3" placeholder="Axtarış" />
          <div className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px" }}>
            N
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;