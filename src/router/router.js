import { loading } from '@/components/loading/loading'
import { notFound } from '@/components/notFound/notFound'

import { routes } from './routes'

export async function router() {
	const currentHash = window.location.hash || '#/'
	const potentialMatch = routes.find(route => route.path === currentHash)
	const view = potentialMatch ? potentialMatch.component : notFound()

	const layout = document.querySelector('#layout')

	if (typeof view === 'function') {
		const result = view()
		if (result instanceof Promise) {
			layout.innerHTML = loading()
			const html = await result
			layout.innerHTML = html
		} else {
			layout.innerHTML = result
		}
	} else {
		layout.innerHTML = view
	}
}
