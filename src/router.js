import { routes } from './constants/routes'
import { NotFound } from './pages/NotFound'

export function router() {
	const potentialMatch = routes.find(
		route => route.path === window.location.pathname
	)
	const view = potentialMatch ? potentialMatch.component : NotFound

	document.querySelector('#app').innerHTML = view()
}
