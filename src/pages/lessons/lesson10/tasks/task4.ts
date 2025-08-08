// Завдання "Контроль часу": Створіть програму, яка дозволяє користувачу встановити певний час (у секундах) за допомогою введення з клавіатури. Потім використовуйте setTimeout або setInterval, щоб після встановленого часу вивести повідомлення.

export function fourthTask() {
	const resultTask4 = document.querySelector('.resultTask4')!
	const setDurationInput = document.getElementById(
		'setDurationInput'
	) as HTMLInputElement
	const startBtnTask4 = document.getElementById(
		'startBtnTask4'
	) as HTMLButtonElement
	let timeoutId: ReturnType<typeof setTimeout>

	startBtnTask4?.addEventListener('click', () => {
		if (!setDurationInput) return
		startBtnTask4.disabled = true
		const duration = Number(setDurationInput.value.trim())

		if (isNaN(duration) || duration <= 0) {
			resultTask4.innerHTML = 'Введіть будь ласка число'
			console.log('Введіть будь ласка число')
			return
		}

		resultTask4.innerHTML = `Очікування ${duration} сек...`
		console.log(`Очікування ${duration} сек...`)

		timeoutId = setTimeout(() => {
			resultTask4.innerHTML = `Повідомлення після ${duration}сек.`
			console.log(`Повідомлення після ${duration}сек.`)
			startBtnTask4.disabled = false
			clearTimeout(timeoutId)
		}, duration * 1000)
	})
}
