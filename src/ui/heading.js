import { twMerge } from 'tailwind-merge'

export function heading(children, className) {
	return `
		<h1 class="${twMerge(
			`${className} text-2xl text-white font-bold`
		)}">${children}</h1>
	`
}
