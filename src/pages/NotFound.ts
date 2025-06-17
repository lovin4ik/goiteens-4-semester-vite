import { mainLink } from '@/ui/mainLink'

import { LINKS } from '@/config/links'

export function notFoundPage(): string {
	return `
		<div class="min-h-screen flex items-center justify-center flex-col">
			<h1 class="text-center text-3xl font-bold">404 Not Found</h1>

			${mainLink({
				children: 'Go to home',
				link: LINKS.HOME,
				className: 'underline'
			})}
		</div>
	`
}
