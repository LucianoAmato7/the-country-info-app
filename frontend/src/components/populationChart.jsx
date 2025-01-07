"use client";
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function PopulationChart({ data }) {
    const years = data.map(d => d.year);
    const population = data.map(d => d.value);

    const chartData = {
        labels: years,
        datasets: [
            {
                label: 'Population',
                data: population,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Population Over Time',
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Year',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Population',
                },
            },
        },
    };

    return (
        <div>
            <Line data={chartData} options={options} />
        </div>
    );
}
