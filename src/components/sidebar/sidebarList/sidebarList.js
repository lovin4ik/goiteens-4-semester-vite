import { mainLink } from '@/ui/mainLink'

import { LESSONS } from '../sidebar.data'

export function sidebarList() {
	return `
		${LESSONS.map(lesson => {
			const isActive = lesson.link === window.location.hash

			return `
				<li>
					${mainLink({
						children: `${lesson.id}. ${lesson.title}`,
						link: lesson.link,
						className: `text-sm ${isActive ? 'text-primary font-bold' : ''}`
					})}
				</li>
			`
		}).join('')}
	`
}
