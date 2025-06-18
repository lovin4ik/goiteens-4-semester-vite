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

let chart: Chart

export function chartTaskInit() {
	const chartCanvas = document.getElementById('salesChart') as HTMLCanvasElement
	const ctx = chartCanvas?.getContext('2d') as CanvasRenderingContext2D

	if (!ctx) {
		console.error('Canvas context is not available.')
		return
	}

	chart = new Chart(ctx, {
		type: 'line',
		data: fifthChartData,
		options: {
			responsive: false,
			plugins: {
				legend: {
					position: 'top',
					labels: {
						color: getChartTextColor()
					}
				}
			},
			scales: {
				y: {
					beginAtZero: true,
					ticks: {
						color: getChartTextColor()
					}
				},
				x: {
					ticks: {
						color: getChartTextColor()
					}
				}
			}
		}
	})
}

function getChartTextColor() {
	return document.documentElement.classList.contains('dark')
		? '#ffffff'
		: '#000000'
}

export function changeChartColor() {
	if (!chart) return
	const color = getChartTextColor()
	chart.options.plugins!.legend!.labels!.color = color
	chart.options.scales!.x!.ticks!.color = color
	chart.options.scales!.y!.ticks!.color = color
	chart.update()
}
