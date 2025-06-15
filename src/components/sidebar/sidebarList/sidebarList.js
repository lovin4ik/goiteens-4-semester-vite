import { twMerge } from 'tailwind-merge'

import { mainLink } from '@/ui/mainLink'

import { LESSONS } from '../sidebar.data'

/**
 * @returns {string}
 */

export function sidebarList() {
	return `
		${LESSONS.map(lesson => {
			const isActive = lesson.link === window.location.hash

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
