import { useSetTitle } from '@/utils/useSetTitle'

import { initSecondLesson } from './lesson2'
import { heading } from '@/shared/ui/heading'

export function secondLessonPage(): string {
	useSetTitle('lesson 2')

	requestAnimationFrame(() => {
		initSecondLesson()
	})

	return `
		<div class="flex flex-col justify-center items-center min-h-full">
			${heading({ children: 'lesson-2', className: 'text-center mb-4' })}
			
			<div class="slider mx-auto w-[400px] mt-4 h-[270px]">
				<input
					type="range"
					min="1"
					max="100"
					value="50"
					class="slider__input w-full"
				/>

				<div class="slider__wrapper max-w-screen m-[20px_auto] aspect-video">
					<img
						src=""
						class="slider__image max-w-full bg-white/60 h-full w-full"
						loading="lazy"
					/>
				</div>	
			</div>	
			
			<div
				class="secondLessonContainer mt-4 bg-cyan-900 w-[500px] h-[500px] block mx-auto relative"
			>
				<div
					class="followerDiv bg-cyan-500 w-[50px] h-[50px] absolute top-0 left-0"
				></div>
			</div>
		</div>
	`
}
