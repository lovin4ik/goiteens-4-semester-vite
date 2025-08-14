//? "Порівняння кількох промісів"
//? Ви маєте набір функцій, які повертають проміси з випадковими затримками. Ваше завдання — виконати всі проміси одночасно за допомогою Promise.all і обробити результати.
//? •  Створіть функцію delayedPromise, яка приймає значення і затримку (у мілісекундах) і повертає проміс, який вирішується з заданим значенням після затримки.
//? •  Створіть масив з 5 промісів, використовуючи функцію delayedPromise, із різними значеннями та затримками.
//? •  Використайте Promise.all, щоб одночасно виконати всі проміси з масиву.
//? •  Обробіть результати вирішення промісів та виведіть їх у консоль.

export function firstTask() {
	function delayedPromise<T>(value: T, delay: number): Promise<T> {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (value) {
					resolve(value)
				} else {
					reject(new Error('Promise rejected'))
				}
			}, delay)
		})
	}

	const promises = [
		delayedPromise('Promise 1', 1000),
		delayedPromise('Promise 2', 2000),
		delayedPromise('Promise 3', 1500),
		delayedPromise('Promise 4', 2500),
		delayedPromise('Promise 5', 3000)
	]

	Promise.all(promises)
		.then(results => {
			console.log('All promises resolved:', results)
		})
		.catch(error => {
			console.error('One or more promises rejected:', error)
		})
}
