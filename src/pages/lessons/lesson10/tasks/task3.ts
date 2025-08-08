export function thirdTask() {
	const startBtn = document.querySelector<HTMLButtonElement>('.task3__startBtn')
	const btns = document.querySelectorAll<HTMLButtonElement>('.task3__btn')
	const scoreEl = document.querySelector('.task3__score')!

	let score = 0
	let isGameActive = false
	let gameDuration = 10
	let intervalId: ReturnType<typeof setInterval>
	let timeoutId: ReturnType<typeof setTimeout>

	function handleBtnClick(this: HTMLButtonElement) {
		if (!isGameActive) return

		if (this.classList.contains('active')) {
			score++
			this.classList.remove('active')
			this.disabled = true
			showScore()
		}
	}

	function activateRandomButton() {
		btns.forEach(btn => {
			btn.disabled = true
			btn.classList.remove('active')
		})

		const randomIndex = Math.floor(Math.random() * btns.length)

		btns.forEach((btn, index) => {
			if (index === randomIndex) {
				btn.disabled = false
				btn.classList.add('active')
			}
		})
	}

	function showScore() {
		scoreEl.innerHTML = `${score}`
	}

	function startGame() {
		if (isGameActive) return

		isGameActive = true
		score = 0

		btns.forEach(btn => {
			btn.addEventListener('click', handleBtnClick)
		})

		intervalId = setInterval(() => {
			activateRandomButton()
		}, 1000)

		timeoutId = setTimeout(() => {
			isGameActive = false
			clearInterval(intervalId)
			clearTimeout(timeoutId)

			btns.forEach(btn => {
				btn.disabled = true
				btn.classList.remove('active')
			})

			showScore()
		}, gameDuration * 1000)
	}

	btns.forEach(btn => {
		btn.disabled = true
	})

	startBtn?.addEventListener('click', startGame)
}
