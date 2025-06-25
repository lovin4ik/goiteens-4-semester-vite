import { PAGES } from '@/config/pages.config'

import { renderThemeBtn } from './changeTheme/changeTheme'
import { sidebarList } from './sidebarList/sidebarList'
import { mainLink } from '@/shared/ui/mainLink'

export function sidebar(): string {
	return `
		<aside class="col-start-1 col-end-2 row-start-1 row-end-3 bg-white/20 dark:bg-sidebar/30 border-ios backdrop-blur-3xl p-4 rounded-[0_12px_12px_0] my-2 max-h-[calc(100vh-16px)] overflow-hidden scrollbar-none" id="sidebar">
			<div class="flex flex-row justify-between items-center scrollbar-none">
				${mainLink({
					children: 'Valera<span class="text-secondary font-bold">HW</span>',
					link: PAGES.HOME,
					className:
						'text-xl ml-3 transition-none hover:text-black dark:hover:text-white'
				})}

				<span class="w-[24px] h-[24px]" id="themeBtnContainer">
					${renderThemeBtn()}
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
	renderThemeBtn()
}

window.addEventListener('hashchange', renderSidebar)

document.addEventListener('DOMContentLoaded', renderSidebar)
