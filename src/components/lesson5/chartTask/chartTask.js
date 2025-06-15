/**
 * @returns {string}
 */
import { chartTaskInit } from './chartTaskInit'

export function chartTask() {
	requestAnimationFrame(() => {
		chartTaskInit()
	})

	return `
		<div class="mt-4">
			<h2 class="text-xl font-bold text-center">Chart.js</h2>
			<canvas id="salesChart" width="400" height="300"></canvas>
		</div>
	`
}
