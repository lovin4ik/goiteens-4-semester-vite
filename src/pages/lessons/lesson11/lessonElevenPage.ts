import { lessonElevenInit } from './lessonElevenInit'
import { mainBtn } from '@/shared/ui/mainBtn'

export function lessonElevenPage() {
	requestAnimationFrame(() => {
		lessonElevenInit()
	})

	return `
		<div>
			<h1 class="text-2xl font-bold">Lesson 11</h1>

			<div class="flex flex-col items-center justify-center" id="timer">
				<span class="text-6xl font-bold mt-2" id="timerShow">1:00</span>

				${mainBtn({
					children: 'Запустити таймер',
					id: 'startTimerBtn',
					className: 'mt-4'
				})}

				<span class="text-xl font-bold mt-2" id="timerMessage"></span>
			</div>

			<div class="flex flex-col items-center justify-center" id="timer2">
				<span class="text-6xl font-bold mt-2" id="timerShow2">30.00</span>

				${mainBtn({
					children: 'Запустити таймер',
					id: 'startTimerBtn2',
					className: 'mt-4'
				})}

				<span class="text-xl font-bold mt-2" id="timerMessage2"></span>
				<div class="animation" id="animation"></div>
			</div>
		</div>
	`
}
