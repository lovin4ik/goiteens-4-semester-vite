import { twMerge } from 'tailwind-merge'

export function mainBtn(children, id, className) {
	return `
		<button 
			class="${twMerge(`
				bg-white text-black rounded-2xl py-2 px-4 transition-colors duration-300 ease-in-out hover:bg-white/80 font- cursor-pointer disabled:opacity-60 ${className}
			`)}" 
			id="${id}"
		>
			${children}
		</button>
	`
}
