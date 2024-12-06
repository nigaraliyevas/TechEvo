import React, { useEffect, useState } from "react";

const AnalyticsList = () => {
    const [analyticsData, setAnalyticsData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // API sorğusu
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "http://srv654911.hstgr.cloud:8081/api/v1/admin/getAnalytics"
                );

                if (!response.ok) {
                    throw new Error(`Xəta baş verdi: ${response.status}`);
                }

                const data = await response.json();
                setAnalyticsData(data); // Gələn məlumatları state-də saxlayırıq
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []); // Komponent yüklənəndə bir dəfə çağırılır

    if (isLoading) {
        return <div>Yüklənir...</div>;
    }

    if (error) {
        return <div>Xəta baş verdi: {error}</div>;
    }

    return (
        <div className="d-flex flex-wrap justify-content-start">
            {analyticsData &&
                Object.entries(analyticsData).map(([key, value], index) => (
                    <div
                        key={index}
                        className="card text-center m-2"
                        style={{ width: "200px", backgroundColor: "#f8f9fa" }}
                    >
                        <div className="card-body">
                            <h5 className="card-title">{value}</h5>
                            <p className="card-text">{key}</p>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default AnalyticsList;

