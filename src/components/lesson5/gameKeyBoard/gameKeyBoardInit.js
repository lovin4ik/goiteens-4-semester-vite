import { defaultModules, error, notice, success } from '@pnotify/core'
import * as PNotifyMobile from '@pnotify/mobile'

import { shuffleArray } from '@/utils/shufleArray'
import { startTimer, stopTimer } from '@/utils/timer'
import { useLocalStorage } from '@/utils/useLocalStorage'

import { GAME_STATUS } from '@/pages/lessons/lesson5/gameStatus.data'
import { keysData } from '@/pages/lessons/lesson5/keys.data'

defaultModules.set(PNotifyMobile, {})

let keys = []
let currentKeyIndex = 0
let currentStatusGame = GAME_STATUS.NEW_GAME

let keyPressHandler = null
let currentElapsedTime = null

export function gameKeyBoardInit() {
	const newGameBtn = document.getElementById('newGameBtn')
	const keyText = document.getElementById('key')
	const timerText = document.getElementById('timer')
	const betterTimeText = document.getElementById('betterTimer')

	const { useLocalStorageGet, useLocalStorageSet } = useLocalStorage(
		'betterTime',
		null
	)
	let betterTime = useLocalStorageGet()

	betterTimeText.textContent = betterTime
		? `Найкращий час: ${betterTime} c`
		: 'Найкращий час: 0.0 c'

	function setStatusGame(status) {
		currentStatusGame = status

		switch (currentStatusGame) {
			case GAME_STATUS.IN_GAME:
				newGameBtn.disabled = true
				newGameBtn.textContent = 'В грі'
				break
			case GAME_STATUS.WIN:
				newGameBtn.disabled = false
				newGameBtn.textContent = 'Нова гра'
				break
			case GAME_STATUS.NEW_GAME:
				newGameBtn.disabled = false
				newGameBtn.textContent = 'Нова гра'
				break
			default:
				newGameBtn.disabled = false
				newGameBtn.textContent = 'Нова гра'
				break
		}
	}

	function handleKeyPress(e) {
		if (currentKeyIndex >= keys.length) return

		const pressedKey = e.key.toLowerCase()
		const correctKey = keys[currentKeyIndex]

		if (pressedKey === correctKey) {
			notice({
				text: `Вірно! Клавіша ${pressedKey.toUpperCase()}`,
				delay: 300
			})
			currentKeyIndex++

			if (currentKeyIndex < keys.length) {
				keyText.textContent = `Натисніть на клавішу: "${keys[currentKeyIndex]}"`
			} else {
				keyText.textContent =
					'Гру завершено! Натисніть "Нова гра", щоб почати знову.'
				setStatusGame(GAME_STATUS.WIN)

				success({
					text: 'Гру завершено!',
					delay: 600
				})

				stopTimer()
				currentElapsedTime = parseFloat(
					timerText.textContent.replace('Час: ', '').replace(' c', '')
				)

				if (!betterTime || currentElapsedTime < betterTime) {
					betterTime = currentElapsedTime
					useLocalStorageSet(betterTime)
					betterTimeText.textContent = `Найкращий час: ${betterTime} c`
					success({
						text: `Новий найкращий час! ${betterTime} c`,
						delay: 1000
					})
				}
				document.removeEventListener('keydown', keyPressHandler)
			}
		} else {
			error({
				text: `Помилка! Ви натиснули "${pressedKey}"`,
				delay: 300
			})
		}
	}

	function startGame() {
		keys = shuffleArray(keysData)
		currentKeyIndex = 0

		keyText.textContent = `Натисніть на клавішу: "${keys[currentKeyIndex]}"`
		setStatusGame(GAME_STATUS.IN_GAME)
		notice({
			text: 'Вітаємо! Це гра "Вибір клавіші"',
			duration: 600
		})

		startTimer(elapsed => {
			document.getElementById('timer').textContent = `Час: ${elapsed} c`
		})

		keyPressHandler = handleKeyPress
		document.addEventListener('keydown', keyPressHandler)
	}

	newGameBtn.addEventListener('click', startGame)
}
