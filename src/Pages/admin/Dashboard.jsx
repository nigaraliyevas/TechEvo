import "bootstrap/dist/css/bootstrap.min.css";
import RecentOrders from "../../components/AdminComponents/RecentOrders";
// import style from "../../components/AdminComponents/RecentOrders.module.scss";


const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-12 col-md-3 col-lg-2 bg-dark text-white vh-100 p-3">
          <h4 className="mb-4">Admin Panel</h4>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-white">
                Baş lövhə
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-white">
                Mağaza
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-white">
                Sifarişlər
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-white">
                Səhifələr
              </a>
            </li>
            <li className="nav-item mt-auto">
              <a href="#" className="nav-link text-white">
                Parametrlər
              </a>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="col-12 col-md-9 col-lg-10" >
          <div className="row p-4">
            {/* Header */}
            <div className="col-12 d-flex justify-content-between align-items-center mb-4">
              <h2>21 Noyabr, 2024</h2>
              <div className="d-flex align-items-center">
                <input type="text" className="form-control me-3" placeholder="Axtarış" />
                <div className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px" }}>
                  N
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="col-12 d-flex flex-wrap justify-content-between mb-4">
              {["Ümumi Sifarişlər", "Uğurlu Çatdırılmalar", "Gözləyən Sifarişlər", "Qeydiyyatdan Keçən İstifadəçilər"].map((stat, index) => (
                <div key={index} className="card text-center flex-grow-1 mx-2 mb-3" style={{ maxWidth: "200px" }}>
                  <div className="card-body">
                    <h5 className="card-title">500</h5>
                    <p className="card-text">{stat}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Graph and Comments */}
            <div className="col-12 row mb-4">
              {/* Graph */}
              <div className="col-12 col-md-8 mb-3">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">Aylıq hesabat</h5>
                    <div className="chart-placeholder">
                      {" "}
                      {/* Replace this with your chart */}
                      <p>Chart will be rendered here</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Comments */}
              <div className="col-12 col-md-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">Son şərhlər</h5>
                    {[1, 2].map((comment, index) => (
                      <div key={index} className="mb-3">
                        <strong>Leyla Babayeva</strong>
                        <p className="small text-muted">Qeydiyyat tarixi: 09/25/2024</p>
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="badge bg-success">5.0 ⭐</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Orders */}
           <RecentOrders  />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
