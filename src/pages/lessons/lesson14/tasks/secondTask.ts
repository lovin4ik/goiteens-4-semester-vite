//? Завдання 2
//? "Змагання промісів"
//? Ви маєте набір функцій, які повертають проміси з випадковими затримками. Ваше завдання — виконати всі проміси одночасно за допомогою Promise.race і отримати результат найшвидшого проміса.
//? •  Створіть функцію randomDelay, яка приймає значення і повертає проміс з випадковою затримкою (від 1000 до 5000 мілісекунд).
//? •  Створіть масив з 5 промісів, використовуючи функцію randomDelay, із різними значеннями.
//? •  Використайте Promise.race, щоб виконати всі проміси з масиву і отримати результат найшвидшого проміса.
//? •  Обробіть результат найшвидшого проміса та виведіть його у консоль.

export function secondTask() {
	function randomDelay<T>(value: T): Promise<T> {
		const delay = Math.floor(Math.random() * 4000) + 1000 // Від 1000 до 5000 мс
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (value) {
					resolve(value)
				} else {
					reject('Promise rejected')
				}
			}, delay)
		})
	}

	const promises = [
		randomDelay('Promise A'),
		randomDelay('Promise B'),
		randomDelay('Promise C'),
		randomDelay('Promise D'),
		randomDelay('Promise E')
	]

	Promise.race(promises)
		.then(result => {
			console.log('Fastest promise resolved:', result)
		})
		.catch(error => {
			console.error('One or more promises rejected:', error)
		})
}
