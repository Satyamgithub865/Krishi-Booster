// src/components/BarChart.js
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Box } from '@mui/material';
function BarChart() {
    const chartOptions = {
        chart: {
            id: 'bar-chart',
        },
        xaxis: {
            categories: [
                '2018',
                '2019', '2020', '2021', '2022', '2023',
            ],
        },
    };

    const chartSeries = [
        {
            name: 'Sales (crore)',
            data: [12, 15, 10, 35, 40, 38],
            type: 'column',
            color: '#007ACC', // Dark color for Sales
        },
        {
            name: 'Users Visited',
            data: [15, 30, 20, 40, 42, 50],
            type: 'column',
            color: '#33CC33', // Light color for Users Visited
        },
    ];

    return (
        <Box width={'90%'}>
            <ReactApexChart options={chartOptions} series={chartSeries} type="bar" height={350} />
        </Box>
    );
}

export default BarChart;
