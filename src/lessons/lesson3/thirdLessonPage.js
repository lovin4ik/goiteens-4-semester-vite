import { LINKS } from '../../constants/links'
import { initThirdLesson } from './lesson3'

export function thirdLessonPage() {
	requestAnimationFrame(() => {
		initThirdLesson()
	})

	return `
		<a
			href="${LINKS.HOME}"
			class="text-lg m-4 transition-colors duration-700 ease-in-out hover:text-primary"
			id="homeLink"
			>Home Page</a
		>

		<div id="root" class="flex flex-col justify-center items-center">
			<h1 class="text-3xl font-bold text-center mb-4">lesson-3</h1>

			<button
				class="mb-4 bg-white text-black rounded-2xl py-2 px-4 transition-colors duration-300 ease-in-out hover:bg-white/80 font-medium cursor-pointer"
				id="beginBtn"
			>
				Запустити
			</button>
			<ul
				class="flex gap-8 flex-col justify-center items-center mb-4"
				id="imagesList"
			></ul>
		</div>
	`
}
