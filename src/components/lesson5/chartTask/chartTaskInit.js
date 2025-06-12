import {
	CategoryScale,
	Chart,
	Legend,
	LineController,
	LineElement,
	LinearScale,
	PointElement,
	Title,
	Tooltip
} from 'chart.js'

import { fifthChartData } from '@/pages/lessons/lesson5/fifthChart.data'

Chart.register(
	LineController,
	LineElement,
	PointElement,
	LinearScale,
	CategoryScale,
	Title,
	Tooltip,
	Legend
)

export function chartTaskInit() {
	const chartCanvas = document.getElementById('salesChart')
	const ctx = chartCanvas.getContext('2d')

	const salesChart = new Chart(ctx, {
		type: 'line',
		data: fifthChartData,
		options: {
			responsive: true,
			plugins: {
				legend: {
					position: 'top',
					labels: {
						color: '#ffffff'
					}
				}
			},
			scales: {
				y: {
					beginAtZero: true,
					ticks: {
						color: '#ffffff'
					}
				},
				x: {
					ticks: {
						color: '#ffffff'
					}
				}
			}
		}
	})
}
