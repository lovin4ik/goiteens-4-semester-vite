import { heading } from '@/ui/heading'
import { mainBtn } from '@/ui/mainBtn'

import { initThirdLesson } from './lesson3'

/**
 * @returns {string}
 */

export function thirdLessonPage() {
	requestAnimationFrame(() => {
		initThirdLesson()
	})

	return `
		<div class="flex flex-col justify-center items-center">
			${heading({ children: 'lesson-3', className: 'text-center mb-4' })}
			
			${mainBtn({
				children: 'Запустити',
				id: 'beginBtn',
				className: 'mb-4'
			})}

			<ul
				class="flex gap-8 flex-col justify-center items-center mb-4"
				id="imagesList"
			></ul>
		</div>
	`
}
