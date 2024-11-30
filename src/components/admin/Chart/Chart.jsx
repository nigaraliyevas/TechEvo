// import { endOfMonth, addDays, format, startOfMonth } from "date-fns";

// const Chart = () => {
//   function generateWeeksUntilEndOfMonth(startDate) {
//     const start = new Date(startDate);
//     const end = endOfMonth(start);
//     const weeks = [];
//     let currentStart = new Date(start);

//     // Loop until the end of the month
//     while (currentStart <= end) {
//       const weekStart = new Date(currentStart);
//       const weekEnd = addDays(currentStart, 6);

//       weeks.push({
//         start: format(weekStart, "yyyy-MM-dd"),
//         end: format(weekEnd > end ? end : weekEnd, "yyyy-MM-dd"),
//       });

//       currentStart = addDays(weekStart, 7);
//     }

//     return weeks;
//   }

//   const today = new Date();
//   const firstDayOfMonth = startOfMonth(today);
//   const weeks = generateWeeksUntilEndOfMonth(firstDayOfMonth);
//   console.log(weeks);

//   return <div>Check the console for the generated weeks!</div>;
// };

// export default Chart;
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { endOfMonth, differenceInCalendarWeeks, addDays, format, startOfMonth } from "date-fns";

const generateWeeksUntilEndOfMonth = startDate => {
  const start = startDate;
  const end = endOfMonth(start); // Calculate the end of the month
  const numberOfWeeks = differenceInCalendarWeeks(end, start) + 1; // Total weeks until end of the month

  const weeks = [];
  let currentStart = new Date(start); // Initialize the current start date

  for (let i = 0; i < numberOfWeeks; i++) {
    const weekStart = new Date(currentStart);
    const weekEnd = addDays(currentStart, 6); // End of the week is 6 days later

    // Ensure week end does not go beyond the end of the month
    weeks.push({
      week: `Week ${i + 1}`,
      start: format(weekStart, "yyyy-MM-dd"),
      end: format(weekEnd > end ? end : weekEnd, "yyyy-MM-dd"),
    });

    // Move to the next week
    currentStart = addDays(currentStart, 7);
  }

  return weeks;
};
// const { data, error, isLoading } = useGetAnalyticsQuery(); // Fetch analytics data

const Chart = () => {
  // Generate weeks for the current month
  const weeks = generateWeeksUntilEndOfMonth(startOfMonth(new Date()));
  const data = weeks.map((week, index) => ({
    week: week.week,
    ziyaretSayi: Math.floor(Math.random() * 30),
    sifaris: Math.floor(Math.random() * 30),
    qeydiyat: Math.floor(Math.random() * 30),
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="8 3" />
        <XAxis dataKey="week" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="ziyarətSayi" stroke="#8979FF" activeDot={{ r: 8 }} name="Ziyarət sayı" />
        <Line type="monotone" dataKey="sifaris" stroke="#FF928A" name="Sifariş" />
        <Line type="monotone" dataKey="qeydiyat" stroke="#3CC3DF" name="Qeydiyyat" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
