import { twMerge } from 'tailwind-merge'

/**
 * @param {Object} props
 * @param {string} props.children
 * @param {string} [props.className]
 * @return {string}
 */

export function heading({ children, className }) {
	return `
		<h1 class="${twMerge(`text-2xl text-white font-bold ${className}`)}">
			${children}
		</h1>
	`
}
