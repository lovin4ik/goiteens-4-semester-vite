import { mainLink } from '../components/mainLink'
import { LINKS } from '../constants/links'

export function NotFound() {
	return `
		<div class="min-h-screen flex items-center justify-center py-8 flex-col">
			<h1 class="text-center text-3xl font-bold">404 Not Found</h1>

			${mainLink('Go to home', LINKS.HOME, 'underline')}
		</div>
	`
}
