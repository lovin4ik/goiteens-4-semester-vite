//ToDo Завдання "Таймер інтервалу": Створіть програму, яка виводить повідомлення кожну секунду за допомогою setInterval. Після 5 повідомлень зупиніть виконання інтервалу за допомогою clearInterval.

const stopCount = 5
const durationBetweenCount = 1000
let intervalId: ReturnType<typeof setInterval>

export function firstTask() {
	const startBtn = document.querySelector(
		'.startBtn__firstTask'
	) as HTMLButtonElement
	const resultTask1 = document.getElementById('resultTask1')!

	startBtn?.addEventListener('click', () => {
		startBtn.disabled = true
		let count: number = 0

		intervalId = setInterval(() => {
			count++
			console.log('count:', count)
			resultTask1.textContent = `count: ${count}`

			if (count >= stopCount) {
				resultTask1.textContent = `setInterval було зупинено після ${stopCount}`
				console.log(`setInterval було зупинено після ${stopCount}`)
				clearInterval(intervalId)
				startBtn.disabled = false
				return
			}
		}, durationBetweenCount)
	})
}
