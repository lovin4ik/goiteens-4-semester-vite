import { useSetTitle } from '@/utils/useSetTitle'

import { initFirstLesson } from './lesson1'
import './lesson1.css'
import { heading } from '@/shared/ui/heading'

export function firstLessonPage(): string {
	useSetTitle('lesson 1')

	requestAnimationFrame(() => {
		initFirstLesson()
	})

	return `
		<div class="min-h-full flex items-center justify-center flex-col"> 
			${heading({ children: 'lesson-1', className: 'text-center mb-4' })}

			<ul 
				class="grid w-full max-w-[1200px] grid-cols-1 auto-rows-[180px] gap-2 p-0 list-none mx-auto sm:grid-cols-2 sm:auto-rows-[200px] sm:gap-3 md:grid-cols-2 md:auto-rows-[220px] lg:grid-cols-3 lg:auto-rows-[220px] xl:grid-cols-[repeat(auto-fill,minmax(380px,1fr))] xl:auto-rows-[240px] xl:w-[1200px] xl:gap-3" 
				id="imageGallery"
			>
			</ul>

			<div class="lightbox" id="lightbox">
				<div class="lightbox__overlay"></div>

				<div class="lightbox__content rounded-lg"></div>

				<div class="arrow-left absolute left-4 cursor-pointer">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="128"
						height="128"
						viewBox="0 0 24 24"
						class="fill-white transition-colors duration-300 ease-in-out hover:fill-primary"
					>
						<path
							d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"
						></path>
					</svg>
				</div>
				<div class="arrow-right absolute right-4 cursor-pointer">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="128"
						height="128"
						viewBox="0 0 24 24"
						class="text-9xl fill-white transition-colors duration-300 ease-in-out hover:fill-primary"
					>
						<path
							d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"
						></path>
					</svg>
				</div>
				<button
					type="button"
					class="lightbox__button"
					data-action="close-lightbox"
				></button>
			</div>
		</div>
	`
}
