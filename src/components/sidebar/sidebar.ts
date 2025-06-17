import { mainLink } from '@/ui/mainLink'

import { LINKS } from '@/config/links'

import { changeTheme } from './changeTheme/changeTheme'
import { sidebarList } from './sidebarList/sidebarList'

export function sidebar(): string {
	return `
		<aside class="col-start-1 col-end-2 row-start-1 row-end-3 bg-sidebar/30 backdrop-blur-3xl p-4 rounded-[0_12px_12px_0] my-2 max-h-[calc(100vh-16px)] overflow-hidden">
			<div class="flex flex-row justify-between items-center">
				${mainLink({
					children: 'Valera<span class="text-purple-900 font-bold">HW</span>',
					link: LINKS.HOME,
					className: 'text-xl ml-3'
				})}

				<span class="w-[24px] h-[24px]" id="themeBtnContainer">
					${changeTheme()}
				</span>
			</div>

			<ul class="flex flex-col gap-0.5 mt-2 overflow-x-auto max-h-full px-2" id="sidebarList">
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
