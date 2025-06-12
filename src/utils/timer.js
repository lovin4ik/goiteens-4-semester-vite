let timerInterval = null
let timerStartTime = null

export function startTimer(callback) {
	stopTimer()

	timerStartTime = Date.now()
	timerInterval = setInterval(() => {
		const elapsed = ((Date.now() - timerStartTime) / 1000).toFixed(1)
		callback(elapsed)
	}, 100)
}

export function stopTimer() {
	clearInterval(timerInterval)
	timerInterval = null
}
