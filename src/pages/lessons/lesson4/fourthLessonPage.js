import { heading } from '@/ui/heading'
import { mainBtn } from '@/ui/mainBtn'

import { initFourthLesson } from './initFourthLesson'

/**
 * @returns {string}
 */

export function fourthLessonPage() {
	requestAnimationFrame(() => {
		initFourthLesson()
	})

	return `
		<div class="flex flex-col justify-center items-center h-full">
			${heading({ children: 'lesson-4', className: 'text-center mb-4' })}
			
			${mainBtn({
				children: 'Запустити',
				id: 'beginBtn',
				className: 'mb-4'
			})}
		</div>
	`
}
