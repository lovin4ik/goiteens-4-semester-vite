import { twMerge } from 'tailwind-merge'

interface MainInputProps {
	placeholder: string
	id?: string
	className?: string
	name?: string
	type?: string
	require?: boolean
	attrs?: Partial<Record<string, string | number | boolean | (() => void)>>
}

export function mainInput({
	placeholder,
	type = 'text',
	id = '',
	className = '',
	name = '',
	require = false,
	attrs = {}
}: MainInputProps) {
	const attrsString = Object.entries(attrs)
		.map(([key, value]) => (value === true ? key : `${key}="${value}"`))
		.join(' ')

	return `
		<input 
			type="${type}" 
			placeholder="${placeholder}" 
			name="${name ? name : id ? id : ''}"
			class="${twMerge(`text-black placeholder:text-black/80 dark:text-white dark:placeholder:text-white/80 text-md outline-none px-2 py-2.5 shadow-ios bg-white/10 backdrop-blur-[5px] block rounded-md focus:bg-white/15 transition-colors ${className}`)}" 
			${id ? `id="${id}"` : ''} 
			${attrsString}
			${require ? 'required' : ''}
		/>
	`
}
