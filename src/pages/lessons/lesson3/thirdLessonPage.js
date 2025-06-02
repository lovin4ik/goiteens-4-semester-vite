import { LINKS } from '@/configs/links'
import { mainLink } from '@/ui/mainLink'
import { initThirdLesson } from './lesson3'

export function thirdLessonPage() {
	requestAnimationFrame(() => {
		initThirdLesson()
	})

	return `
		${mainLink('Go to home', LINKS.HOME, 'mt-12')}

		<h1 class="text-3xl font-bold text-center mb-4">lesson-3</h1>

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
