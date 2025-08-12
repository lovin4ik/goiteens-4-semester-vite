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

		intervalId = setInterval(() => {
			const time = this.targetDate.getTime() - Date.now()

			if (time < 0 || time > 86400000) {
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
				const selectedUnit = document.querySelector<HTMLElement>(
					`[data-value="${unit}"]`
				)

				if (!selectedUnit) return

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
