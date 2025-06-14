import { heading } from '@/ui/heading'

import { initFourthLesson } from './initFourthLesson'

export function fourthLessonPage() {
	requestAnimationFrame(() => {
		initFourthLesson()
	})
	return `
		${heading('lesson-4', 'text-center mb-4')}

		<button
			class="mb-4 bg-white text-black rounded-2xl py-2 px-4 transition-colors duration-300 ease-in-out hover:bg-white/80 font- cursor-pointer"
			id="beginBtn"
		>
			Запустити
		</button>
	`
}
