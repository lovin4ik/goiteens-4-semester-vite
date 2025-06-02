import { routes } from '@/constants/routes'
import { NotFound } from '@/pages/NotFound'

export function router() {
	const currentHash = window.location.hash || '#/'
	const potentialMatch = routes.find(route => route.path === currentHash)
	const view = potentialMatch ? potentialMatch.component : NotFound

	document.querySelector('#app').innerHTML = view()
}
