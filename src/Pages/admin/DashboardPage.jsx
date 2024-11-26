import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
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
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Son Sifarişlər</h5>
            <table className="table">
              <thead>
                <tr>
                  <th>Məhsul</th>
                  <th>Sifariş nömrəsi</th>
                  <th>Tarix</th>
                  <th>Qiymət</th>
                  <th>Miqdar</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {["Macbook 15, Mouse Logitech, Keyboard", "Macbook 15", "Macbook 15"].map((product, index) => (
                  <tr key={index}>
                    <td>{product}</td>
                    <td>12345678</td>
                    <td>02/05/2024</td>
                    <td>500 AZN</td>
                    <td>{index + 1}</td>
                    <td>
                      <span className={`badge ${index === 0 ? "bg-success" : index === 1 ? "bg-warning" : "bg-danger"}`}>{index === 0 ? "Çatdırılıb" : index === 1 ? "Gözləyir" : "İmtina"}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
