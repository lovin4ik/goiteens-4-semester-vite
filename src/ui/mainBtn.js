import { twMerge } from 'tailwind-merge'

/**
 * @param {Object} options
 * @param {string} options.children
 * @param {string} [options.id]
 * @param {string} [options.className]
 * @param {Object} [options.attrs]
 * @returns {string}
 */
export function mainBtn({ children, id = '', className = '', attrs = {} }) {
	const attrsString = Object.entries(attrs)
		.map(([key, value]) => (value === true ? key : `${key}="${value}"`))
		.join(' ')

	return `
    <button
      class="${twMerge(`
        bg-white text-black rounded-2xl py-2 px-4 transition-colors duration-300 ease-in-out hover:bg-white/80 font-medium cursor-pointer disabled:opacity-60 ${className}
      `)}"
      ${id ? `id="${id}"` : ''}
      ${attrsString}
    >
      ${children}
    </button>
  `
}
