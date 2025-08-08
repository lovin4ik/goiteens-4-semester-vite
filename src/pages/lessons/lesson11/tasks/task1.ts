//? Створити таймер, який буде починати відлік з 1 хвилини та зменшувати час кожну хвилину. При досягненні 30 секунд, таймер повинен відправляти повідомлення екран про те, що залишилось менше половини часу.

let intervalId: ReturnType<typeof setInterval>

export function task1() {
	const timerShow = document.getElementById('timerShow') as HTMLSpanElement
	const timerMessage = document.getElementById(
		'timerMessage'
	) as HTMLSpanElement
	const startTimerBtn = document.getElementById(
		'startTimerBtn'
	) as HTMLButtonElement

	let timeLeft = 60

	startTimerBtn.addEventListener('click', () => {
		startTimerBtn.disabled = true

		intervalId = setInterval(() => {
			timeLeft--

			timerShow.textContent = `${Math.floor(timeLeft / 60)}:${(timeLeft % 60).toString().padStart(2, '0')}`

			if (timeLeft <= 30 && timeLeft > 0) {
				timerMessage.textContent = 'Лишилось менше половини часу!'
			} else if (timeLeft <= 0) {
				timerMessage.textContent = 'Час вийшов!'
				if (intervalId) {
					clearInterval(intervalId)
					intervalId = null
					timerShow.textContent = '1:00'
					startTimerBtn.disabled = false
				}
			} else {
				timerMessage.textContent = ''
			}
		}, 1000)
	})
}
