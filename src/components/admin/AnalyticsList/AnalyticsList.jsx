import { useEffect, useState } from "react";
import styles from "./AnalyticsList.module.scss"; // Assuming SCSS is in a file named 'module.module.scss'

const AnalyticsList = () => {
  const [analyticsData, setAnalyticsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = import.meta.env.VITE_SOME_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}admin/getStatistics`);

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setAnalyticsData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred: {error}</div>;
  }

  return (
    <div className={styles.statsContainer}>
      {/* Card 1: Ümumi Sifarişlər */}
      <div className={styles.card}>
        <div className="card-body">
          <h2>{analyticsData?.loginUserCount || "500"}</h2>
          <h5 className="card-title">Ümumi Sifarişlər</h5>
        </div>
      </div>

      {/* Card 2: Uğurlu Çatdırılmalar */}
      <div className={styles.card}>
        <div className="card-body">
          <h2>{analyticsData?.successOrderCount || "500"}</h2>
          <h5 className="card-title">Uğurlu Çatdırılmalar</h5>
        </div>
      </div>

      {/* Card 3: Gözdəyən Sifarişlər */}
      <div className={styles.card}>
        <div className="card-body">
          <h2>{analyticsData?.expectingOrderCount || "500"}</h2>
          <h5 className="card-title">Gözdəyən Sifarişlər</h5>
        </div>
      </div>

      {/* Card 4: Qeydiyyatdan Keçən İstifadəçilər */}
      <div className={styles.card}>
        <div className="card-body">
          <h2>{analyticsData?.visitCount || "500"}</h2>
          <h5 className="card-title">Qeydiyyatdan Keçən İstifadəçilər</h5>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsList;
