import { twMerge } from 'tailwind-merge'

import { mainLink } from '@/ui/mainLink'

import type { ILesson } from '@/types/lesson.interface'

import { LESSONS } from '../sidebar.data'

export function sidebarList(): string {
	return `
		${LESSONS.map((lesson: ILesson) => {
			const isActive: boolean = lesson.link === window.location.hash

			return `
				<li class="${twMerge(`text-xs w-full h-full bg-transparent px-2 py-1 rounded-md transition-colors duration-300 ease-in-out ${isActive ? 'text-primary bg-white/5' : ''}`)}">
				${mainLink({
					children: `${lesson.id}. ${lesson.title}`,
					link: lesson.link,
					className: `${twMerge(`text-sm w-full h-full ${isActive ? 'text-primary' : ''}`)}`
				})}
				</li>
			`
		}).join('')}
	`
}
