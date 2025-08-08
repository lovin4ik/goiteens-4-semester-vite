//? Створити таймер, який буде починати відлік з 30 секунд та зменшувати час кожну мілісекунду. При досягненні 10 секунд, таймер повинен відтворювати якусь анімацію, а при досягненні 0 секунд — виконувати певну дію, наприклад, робити кнопку почати знову активною.

let intervalId: ReturnType<typeof setInterval>

export function task2() {
	const timerShow = document.getElementById('timerShow2') as HTMLSpanElement
	const timerMessage = document.getElementById(
		'timerMessage2'
	) as HTMLSpanElement
	const startTimerBtn = document.getElementById(
		'startTimerBtn2'
	) as HTMLButtonElement

	let timeLeft = 30.0

	startTimerBtn.addEventListener('click', () => {
		startTimerBtn.disabled = true

		if (intervalId) clearInterval(intervalId)
		timeLeft = 30.0

		intervalId = setInterval(() => {
			timeLeft = Math.max(0, +(timeLeft - 0.1).toFixed(2))

			const seconds = String(Math.floor(timeLeft % 60)).padStart(2, '0')
			const hundredths = String(Math.floor((timeLeft % 1) * 100)).padStart(
				2,
				'0'
			)

			timerShow.textContent = `${seconds}.${hundredths}`

			if (timeLeft <= 10 && timeLeft > 0) {
				timerShow.classList.add('animate-bounce')
			} else if (timeLeft <= 0) {
				timerShow.classList.remove('animate-bounce')
				timerMessage.textContent = 'Час вийшов!'
				clearInterval(intervalId!)
				startTimerBtn.disabled = false
			} else {
				timerMessage.textContent = ''
			}
		}, 100)
	})
}
