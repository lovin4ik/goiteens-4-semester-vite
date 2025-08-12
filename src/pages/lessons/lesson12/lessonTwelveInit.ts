import { CountdownTimer } from './CountdownTimer'

export function lessonTwelveInit() {
	const btnStart = document.querySelector<HTMLButtonElement>('#btnStart')
	const targetDate = document.querySelector<HTMLInputElement>('#target-date')

	if (!btnStart || !targetDate) return

	btnStart.addEventListener('click', () => {
		const targetDateValue = targetDate.value

		if (!targetDateValue) {
			console.log('Please select a future date.')
			return
		}

		new CountdownTimer({
			selector: '#timer',
			targetDate: new Date(targetDateValue)
		})
	})
}
