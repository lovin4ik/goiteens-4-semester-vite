// Завдання "Анімація елементів": Створіть кілька елементів на сторінці і реалізуйте просту анімацію, змінюючи їх розмір, положення чи стилі через певний інтервал за допомогою setInterval.

let intervalId: ReturnType<typeof setInterval>

export function secondTask() {
	const loader = document.querySelector('.task2__loading')
	intervalId = setInterval(() => {
		loader?.classList.toggle('rotate-180')
	}, 1000)
}
