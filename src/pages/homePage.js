import { mainLink } from '@/ui/mainLink'

import { LESSONS } from '@/constants/lessons.data'

export function homePage() {
	return `
	  <div class="min-h-screen flex items-center justify-center py-8 flex-col">
			<h1 class="text-3xl font-bold text-center">
				Це моя сторінка для здачи завданнь для школи GoIteens
			</h1>

			<ul class="flex flex-col gap-2 mt-4" id="lessonsList">
				${LESSONS.map(lesson => {
					return `
					${mainLink(`${lesson.id}. ${lesson.title}`, lesson.link)}
				`
				}).join('')}
			</ul>
		</div>
	`
}
