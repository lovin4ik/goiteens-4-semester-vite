type TimeUnit = 'days' | 'hours' | 'mins' | 'secs'
const timeUnits: TimeUnit[] = ['days', 'hours', 'mins', 'secs']

export class CountdownTimer {
	selector: HTMLElement | null
	targetDate: Date

	constructor({
		selector,
		targetDate
	}: {
		selector: string
		targetDate: Date
	}) {
		this.selector = document.querySelector(`${selector}`)
		this.targetDate = targetDate
		this.init()
	}

	init() {
		let intervalId: ReturnType<typeof setInterval>
		let timeoutId: ReturnType<typeof setTimeout>

		intervalId = setInterval(() => {
			const time = this.targetDate.getTime() - Date.now()

			if (time <= 86400000) {
				if (!this.selector) return
				const timerResult =
					this.selector.querySelector<HTMLElement>('#timerResult')

				if (!timerResult) return

				timerResult.innerHTML = 'Введіть час більше 1 дня'
				clearInterval(intervalId)

				timeoutId = setTimeout(() => {
					timerResult.innerHTML = ''
					clearTimeout(timeoutId)
				})

				return
			}

			if (time < 0) {
				clearInterval(intervalId)
				return
			}

			const days = Math.floor(time / (1000 * 60 * 60 * 24))
			const hours = Math.floor(
				(time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			)
			const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
			const secs = Math.floor((time % (1000 * 60)) / 1000)

			timeUnits.forEach(unit => {
				if (!this.selector) return
				const selectedUnit = this.selector.querySelector<HTMLElement>(
					`[data-value="${unit}"]`
				)
				const timerResult =
					this.selector.querySelector<HTMLElement>('#timerResult')

				if (!selectedUnit || !timerResult) return

				timerResult.innerHTML = `${time} milliseconds left`

				switch (unit) {
					case 'days':
						selectedUnit.textContent = `${days}`
						break
					case 'hours':
						selectedUnit.textContent = `${hours}`
						break
					case 'mins':
						selectedUnit.textContent = `${mins}`
						break
					case 'secs':
						selectedUnit.textContent = `${secs}`
						break
					default:
						break
				}
			})
		})
	}
}
