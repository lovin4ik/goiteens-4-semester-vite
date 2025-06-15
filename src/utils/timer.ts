let timerInterval: ReturnType<typeof setInterval> | null = null
let timerStartTime: number = 0

function startTimer(callback: (elapsed: string) => void) {
	stopTimer()

	timerStartTime = Date.now()
	timerInterval = setInterval(() => {
		const elapsed = ((Date.now() - timerStartTime) / 1000).toFixed(1)
		callback(elapsed)
	}, 100)
}

function stopTimer() {
	if (timerInterval !== null) {
		clearInterval(timerInterval)
	}
	timerInterval = null
}

export const useTimer = () => {
	return { startTimer, stopTimer }
}
