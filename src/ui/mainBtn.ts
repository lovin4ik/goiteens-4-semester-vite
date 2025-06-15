import { twMerge } from 'tailwind-merge'

type MainBtnProps = {
	children: string
	id?: string
	className?: string
	attrs?: Record<string, string | boolean>
}
export function mainBtn({
	children,
	id = '',
	className = '',
	attrs = {}
}: MainBtnProps): string {
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
