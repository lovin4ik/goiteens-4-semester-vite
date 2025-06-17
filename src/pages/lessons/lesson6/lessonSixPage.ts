import { codePreview } from '@/shared/ui/codePreview'

const code = `
export const lessonSixPage = async () => {
	const div = document.createElement('div') as HTMLElement

	div.className = ''

	div.innerHTML = ''

	div.appendChild(
			await codePreview({
			lang: 'ts',
			code: code,
			fileName: 'lessonSixPage'
		})
	)

	return div
}
`

export const lessonSixPage = async () => {
	const div = document.createElement('div') as HTMLElement

	div.className = ''

	div.appendChild(
		await codePreview({
			lang: 'ts',
			code: code,
			fileName: 'lessonSixPage'
		})
	)

	return div
}
