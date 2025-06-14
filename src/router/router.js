import { notFound } from '@/components/notFound/notFound'

import { routes } from './routes'

export function router() {
	const currentHash = window.location.hash || '#/'
	const potentialMatch = routes.find(route => route.path === currentHash)
	const view = potentialMatch ? potentialMatch.component : notFound

	document.querySelector('#layout').innerHTML = view()
}
