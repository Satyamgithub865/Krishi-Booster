import React from "react";
import ReactApexChart from "react-apexcharts";

function DashChart() {
  const chartSeries = [75, 25];
  const colors = ["#94A684", "#fff"];

  return (
    <div>
      <ReactApexChart
        options={{
          chart: { type: "donut" },
          colors,
          legend: { show: false },
          dataLabels: { enabled: false },
        }}
        series={chartSeries}
        type="donut"
        width="170px"
      />
    </div>
  );
}

export default DashChart;