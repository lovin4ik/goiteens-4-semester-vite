import { notFoundPage } from '@/pages/NotFound'

/**
 * @returns {string}
 */
export function notFound() {
	console.error('Error 404: Page not found')

	return notFoundPage()
}
