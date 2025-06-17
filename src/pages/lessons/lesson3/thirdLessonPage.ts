import { initThirdLesson } from './lesson3'
import { heading } from '@/shared/ui/heading'
import { mainBtn } from '@/shared/ui/mainBtn'

export function thirdLessonPage(): string {
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
