import { mainLink } from '@/ui/mainLink'

import { LINKS } from '@/config/links'

import { sidebarList } from './sidebarList/sidebarList'

/**
 * @returns {string}
 */

export function sidebar() {
	return `
		<aside class="col-start-1 col-end-2 row-start-1 row-end-3 bg-sidebar/30 backdrop-blur-3xl p-4 rounded-[0_12px_12px_0] my-2 max-h-[calc(100vh-16px)] overflow-hidden">
			${mainLink({
				children: 'Valera<span class="text-purple-900 font-bold">HW</span>',
				link: LINKS.HOME,
				className: 'text-xl'
			})}

			<ul class="flex flex-col gap-0.5 mt-2 overflow-x-auto max-h-full" id="sidebarList">
				${sidebarList()}
			</ul>
		</aside>
	`
}

function renderSidebar() {
	const sidebarListElement = document.getElementById('sidebarList')
	if (sidebarListElement) {
		sidebarListElement.innerHTML = sidebarList()
	}
}

window.addEventListener('hashchange', renderSidebar)

document.addEventListener('DOMContentLoaded', renderSidebar)
