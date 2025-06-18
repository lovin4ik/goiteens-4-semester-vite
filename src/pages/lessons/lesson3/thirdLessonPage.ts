import { useSetTitle } from '@/utils/useSetTitle'

import { initThirdLesson } from './lesson3'
import { heading } from '@/shared/ui/heading'
import { mainBtn } from '@/shared/ui/mainBtn'

export function thirdLessonPage(): string {
	useSetTitle('lesson 3')

	requestAnimationFrame(() => {
		initThirdLesson()

		document.querySelector('#scrollBtn')?.addEventListener('click', () => {
			document
				.querySelector('#layout')
				?.scrollTo({ top: 0, behavior: 'smooth' })
		})
	})

	return `
		<div class="flex flex-col items-center min-h-full relative">
			${heading({ children: 'lesson-3', className: 'text-center mb-4' })}
			
			${mainBtn({
				children: 'Запустити',
				id: 'beginBtn',
				className: 'mb-4 sticky top-2 z-1 backdrop-blur-md'
			})}

			<ul
				class="flex gap-8 flex-col justify-center items-center mb-4"
				id="imagesList"
			></ul>
			
			<button class="rounded-full px-4 py-3.5 bg-primary text-white fixed right-6 bottom-6 font-jetBrainsMono backdrop-blur-md hover:bg-primary/80 -rotate-90" id="scrollBtn">-></button>
		</div>
	`
}
