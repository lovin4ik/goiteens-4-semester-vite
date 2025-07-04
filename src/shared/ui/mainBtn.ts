import { twMerge } from 'tailwind-merge'

interface MainBtnProps {
	children: string
	id?: string
	className?: string
	attrs?: Partial<Record<string, string | number | boolean | (() => void)>>
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
        bg-bg/5 text-black backdrop-blur-[5px] rounded-lg shadow-ios py-2 px-4 transition-colors duration-300 ease-in-out hover:bg-white/20x font-medium cursor-pointer disabled:opacity-60 backdrop-saturate-150 dark:text-white hover:bg-white/10 ${className}
      `)}"
      ${id ? `id="${id}"` : ''}
      ${attrsString}
    >
      ${children}
    </button>
  `
}
