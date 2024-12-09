import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useGetChartQuery } from "../../../redux/sercives/analyticsApi";
import { useMemo } from "react";

const Chart = () => {
  const { data } = useGetChartQuery();

  const chartData = useMemo(() => {
    if (!data) return [];
    return Object.keys(data).map((key, index) => ({
      week: `Week ${index + 1}`,
      visits: data[key].visitCount,
      orders: data[key].orderCount,
      signup: data[key].loginUserCount,
    }));
  }, [data]);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="week" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="visits" stroke="#8979FF" activeDot={{ r: 8 }} name="Ziyarət sayı" />
        <Line type="monotone" dataKey="orders" stroke="#FF928A" name="Sifariş" />
        <Line type="monotone" dataKey="signup" stroke="#3CC3DF" name="Qeydiyyat" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;