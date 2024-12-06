import "bootstrap/dist/css/bootstrap.min.css";
import Chart from "../../../components/admin/Chart/Chart";
import Comments from "../../../components/admin/LatestComments/Comments";
import AnalyticsList from "../../../components/admin/AnalyticsList/AnalyticsList";
import RecentOrders from "../../../components/AdminComponents/RecentOrders";
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
        <RecentOrders />
      </div>
    </>
  );
};

export default Dashboard;
