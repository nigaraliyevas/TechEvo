import "bootstrap/dist/css/bootstrap.min.css";
import Chart from "../../../components/admin/Chart/Chart";
import Comments from "../../../components/admin/LatestComments/Comments";
import AnalyticsList from "../../../components/admin/AnalyticsList/AnalyticsList";
const Dashboard = () => {
  return (
    <>
      {/* Stats */}
      <AnalyticsList />

      <div className="col-12 row mb-4">
        <div className="col-12 col-md-8 mb-3">
          <div className="card h-100" style={{ background: "#161A1E" }}>
            <div className="card-body">
              <h5 className="card-title text-white" style={{ marginTop: "24px", marginBottom: "24px", marginLeft: "20px", fontSize: "24px", fontWeight: "700", lineHeight: "24.68px" }}>
                Aylıq hesabat
              </h5>
              <div className="chart-placeholder">
                <Chart />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <Comments />
        </div>
      </div>

      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Son Sifarişlər</h5>
            <table className="table bg-success" style={{ background: `#161A1E }`, color: "#fff" }}>
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
