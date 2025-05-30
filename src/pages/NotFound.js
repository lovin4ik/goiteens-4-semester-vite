import { LINKS } from '../constants/links'

export function NotFound() {
	return `
		<div class="min-h-screen flex items-center justify-center py-8 flex-col">
			<h1 class="text-center text-3xl font-bold">404 Not Found</h1>

			<a href="${LINKS.HOME}" class="text-lg transition-colors duration-300 ease-in-out hover:text-primary mt-4 underline">Go to home</a>
		</div>
	`
}
