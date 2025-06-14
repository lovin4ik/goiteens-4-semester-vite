import { heading } from '@/ui/heading'

import { initThirdLesson } from './lesson3'

/**
 * @returns {string}
 */

export function thirdLessonPage() {
	requestAnimationFrame(() => {
		initThirdLesson()
	})

	return `
		${heading({ children: 'lesson-1', className: 'text-center mb-4' })}

		<button
			class="mb-4 bg-white text-black rounded-2xl py-2 px-4 transition-colors duration-300 ease-in-out hover:bg-white/80 font- cursor-pointer"
			id="beginBtn"
		>
			Запустити
		</button>
		<ul
			class="flex gap-8 flex-col justify-center items-center mb-4"
			id="imagesList"
		></ul>
	`
}
