import type { IRoute } from '@/types/route.type'

import { routes } from './routes'
import { notFoundPage } from '@/pages/NotFound'

export function router(): void {
	const currentHash: string = window.location.hash || '#/'
	const potentialMatch: IRoute | undefined = routes.find(
		(route: IRoute) => route.path === currentHash
	)
	const view: () => string = potentialMatch
		? potentialMatch.component
		: notFoundPage

	document.querySelector('#layout')!.innerHTML = view()
}
