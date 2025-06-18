import { useSetTitle } from '@/utils/useSetTitle'

import { initFourthLesson } from './initFourthLesson'
import { heading } from '@/shared/ui/heading'
import { mainBtn } from '@/shared/ui/mainBtn'

export function fourthLessonPage(): string {
	useSetTitle('lesson 4')

	requestAnimationFrame(() => {
		initFourthLesson()
	})

	return `
		<div class="flex flex-col items-center min-h-full">
			${heading({ children: 'lesson-4', className: 'text-center mb-4' })}
			
			${mainBtn({
				children: 'Запустити',
				id: 'beginBtn',
				className: 'mb-4'
			})}
		</div>
	`
}
