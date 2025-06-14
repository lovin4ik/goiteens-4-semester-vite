import { twMerge } from 'tailwind-merge'

/**
 * @returns {string}
 * @param {Object} props
 * @param {string} props.children
 * @param {string} [props.className]
 */

export function heading({ children, className }) {
	return `
		<h1 class="${twMerge(
			`${className} text-2xl text-white font-bold`
		)}">${children}</h1>
	`
}
