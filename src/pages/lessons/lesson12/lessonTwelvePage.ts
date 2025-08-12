import { lessonTwelveInit } from './lessonTwelveInit'
import { mainBtn } from '@/shared/ui/mainBtn'

export function lessonTwelvePage() {
	requestAnimationFrame(() => {
		lessonTwelveInit()
	})

	return `
		<div>
			<h1 class="text-2xl font-bold">Lesson 12</h1>

			<label class="input-label">
				Введіть майбутню дату<i>(більше від сьогоднішньої дати на 1 день):</i>
				
				<input id="target-date" type="datetime-local" class="block mt-2	text-black placeholder:text-black/80 dark:text-white dark:placeholder:text-white/80 text-md outline-none px-2 py-2.5 shadow-ios bg-bg/10 backdrop-blur-[5px] rounded-md focus:bg-bg/15 transition-colors">
			</label>

			${mainBtn({
				children: 'Start',
				id: 'btnStart',
				className: 'mt-4'
			})}

			<div class="timer flex flex-row gap-6 mt-4" id="timer">
				<div class="field text-center rounded-xl px-4 py-2 id shadow-ios dark:shadow-ios-dark bg-secondary/20 backdrop-blur-2xl">
					<span class="label block text-xl ">Days</span>
					<span class="value text-2xl" data-value="days">--</span>
				</div>
				<div class="field text-center rounded-xl px-4 py-2 id shadow-ios dark:shadow-ios-dark bg-secondary/20 backdrop-blur-2xl">
					<span class="label block text-xl ">Hours</span>
					<span class="value text-2xl" data-value="hours">--</span>
				</div>
				<div class="field text-center rounded-xl px-4 py-2 id shadow-ios dark:shadow-ios-dark bg-secondary/20 backdrop-blur-2xl">
					<span class="label block text-xl ">Minutes</span>
					<span class="value text-2xl" data-value="mins">--</span>
				</div>
				<div class="field text-center rounded-xl px-4 py-2 id shadow-ios dark:shadow-ios-dark bg-secondary/20 backdrop-blur-2xl">
					<span class="label block text-xl ">Seconds</span>
					<span class="value text-2xl" data-value="secs">--</span>
				</div>
			</div>
		</div>
	`
}
