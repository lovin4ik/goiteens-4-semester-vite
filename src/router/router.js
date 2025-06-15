import { routes } from './routes'
import { notFoundPage } from '@/pages/NotFound'

export async function router() {
	const currentHash = window.location.hash || '#/'
	const potentialMatch = routes.find(route => route.path === currentHash)
	const view = potentialMatch ? potentialMatch.component : notFoundPage

	document.querySelector('#layout').innerHTML = view()
}
