import "bootstrap/dist/css/bootstrap.min.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useGetAnalyticsQuery } from "../../redux/sercives/analyticsApi";
import Chart from "../../components/admin/Chart/Chart";
import Comments from "../../components/admin/latestComments/Comments";
const Dashboard = () => {
  // const { data, error, isLoading } = useGetAnalyticsQuery(); // Fetch analytics data
  // const chartData = [
  //   { name: "Week 1", Ziyaret: data.visitCount, Sifariş: data.successOrderCount, Qeydiyyat: data.loginUserCount },
  //   { name: "Week 2", Ziyaret: data.visitCount * 1.5, Sifariş: data.successOrderCount * 2, Qeydiyyat: data.loginUserCount * 2 }, // Dummy values
  //   { name: "Week 3", Ziyaret: data.visitCount * 0.8, Sifariş: data.successOrderCount * 0.5, Qeydiyyat: data.loginUserCount * 0.8 }, // Dummy values
  //   { name: "Week 4", Ziyaret: data.visitCount * 1.2, Sifariş: data.successOrderCount * 1.5, Qeydiyyat: data.loginUserCount * 1.3 }, // Dummy values
  // ];

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
        {/* Comments */}
        <div className="col-12 col-md-4"><Comments /></div>
      </div>

      {/* Orders */}
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
