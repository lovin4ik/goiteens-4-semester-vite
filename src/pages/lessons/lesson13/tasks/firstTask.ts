export function firstTask() {
	const delay = (ms: number): Promise<number> => {
		return new Promise(resolve =>
			setTimeout(() => {
				return ms > 0 ? resolve(ms) : resolve(0)
			}, ms)
		)
	}

	const logger = (time: number) => {
		console.log(`Resolved after ${time}ms`)
	}

	// Виклич функції для перевірки
	delay(2000).then(logger) // Resolved after 2000ms
	delay(1000).then(logger) // Resolved after 1000ms
	delay(1500).then(logger) // Resolved after 1500ms
}
