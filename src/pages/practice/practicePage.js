import { LINKS } from '@/constants/links'
import { mainLink } from '@/ui/mainLink'
import { PRACTICE_LIST } from './practiceList'

export function practicePage() {
	return `
		<h1 class="text-3xl font-bold text-center">Practice Page</h1>
		${mainLink('Go to home', LINKS.HOME, 'underline')}

		<ul id="practiceList">
			${PRACTICE_LIST.map(practice => {
				return `
					<li>
						${mainLink(practice.title, practice.link)}
					</li>
				`
			})}
		</ul>
	`
}
