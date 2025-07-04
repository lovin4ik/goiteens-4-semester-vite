import { type ILesson, LESSONS } from '../sidebar.data'

import { mainLink } from '@/shared/ui/mainLink'

export function sidebarList(): string {
	return `
		${LESSONS.map((lesson: ILesson) => {
			const isActive: boolean = lesson.link === window.location.hash

			return `
				<li class="">
					${mainLink({
						children: `${lesson.id}. ${lesson.title}`,
						link: lesson.link,
						className: `text-sm w-full h-full font-medium bg-transparent px-2 py-1 rounded-md transition-colors duration-300 ease-in-out block hover:text-purple-900 ${isActive ? 'bg-white/20 backdrop-blur-[5px] shadow-ios text-black/80 dark:bg-white/10 dark:text-white' : ''}`
					})}
				</li>
			`
		}).join('')}
	`
}
