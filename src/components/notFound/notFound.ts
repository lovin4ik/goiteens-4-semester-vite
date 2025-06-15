import { notFoundPage } from '@/pages/NotFound'

export function notFound(): string {
	console.error('Error 404: Page not found')

	return notFoundPage()
}
