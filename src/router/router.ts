import { routes } from './routes'
import { notFoundPage } from '@/pages/NotFound'
import type { IRoute } from '@/shared/types/route.interface'

type TView = () => Promise<string | HTMLElement> | string | HTMLElement

export async function router(): Promise<void> {
	const currentHash: string = window.location.hash || '#/'
	const potentialMatch: IRoute | undefined = routes.find(
		(route: IRoute) => route.path === currentHash
	)
	const view: TView = potentialMatch ? potentialMatch.component : notFoundPage

	const html = await view()

	const layout = document.querySelector('#layout')!
	if (typeof html === 'string') {
		layout.innerHTML = html
	} else if (html instanceof HTMLElement) {
		layout.innerHTML = ''
		layout.appendChild(html)
	}
}
