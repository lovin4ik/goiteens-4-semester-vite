interface ITransaction {
	id: number
	amount: number
}

export function thirdTask() {
	const randomIntegerFromInterval = (min: number, max: number) => {
		return Math.floor(Math.random() * (max - min + 1) + min)
	}

	const makeTransaction = (
		transaction: ITransaction
	): Promise<{ id: number; time: number }> => {
		const delay = randomIntegerFromInterval(200, 500)

		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const canProcess = Math.random() > 0.3

				if (canProcess) {
					resolve({ id: transaction.id, time: delay })
				} else {
					reject(transaction.id)
				}
			}, delay)
		})
	}

	const logSuccess = ({ id, time }: { id: number; time: number }) => {
		console.log(`Transaction ${id} processed in ${time}ms`)
	}

	const logError = (id: number) => {
		console.warn(`Error processing transaction ${id}. Please try again later.`)
	}

	/*
	 * Працює так
	 */
	// makeTransaction({ id: 70, amount: 150 }, logSuccess, logError)
	// makeTransaction({ id: 71, amount: 230 }, logSuccess, logError)
	// makeTransaction({ id: 72, amount: 75 }, logSuccess, logError)
	// makeTransaction({ id: 73, amount: 100 }, logSuccess, logError)
	/*
	 * Повинно працювати так
	 */
	makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError)

	makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError)

	makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError)

	makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError)
}
