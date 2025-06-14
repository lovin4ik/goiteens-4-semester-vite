import { twMerge } from 'tailwind-merge'

/**
 *
 * @param {Object} options
 * @param {string} options.children
 * @param {string} options.link
 * @param {string} options.className
 * @returns {string}
 */
export function mainLink({ children, link, className }) {
	return `
		<a 
		href="${link}" 
		class="${twMerge(
			`text-lg transition-colors duration-300 ease-in-out hover:text-primary ${className}`
		)}"
	>
			${children}
		</a>
	`
}
