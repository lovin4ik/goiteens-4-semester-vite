import { twMerge } from 'tailwind-merge'

/**
 *
 * @param {Object} options
 * @param {string} options.children
 * @param {string} options.link
 * @param {string} options.className
 * @param {'_self' | '_blank' | '_parent' | '_top' | 'framename'} options.target
 * @returns {string}
 */
export function mainLink({ children, link, className, target = '_self' }) {
	return `
		<a 
			href="${link}" 
			class="${twMerge(
				`text-lg transition-colors duration-300 ease-in-out hover:text-primary ${className}`
			)}"
			target="${target}"
		>
			${children}
		</a>
	`
}
