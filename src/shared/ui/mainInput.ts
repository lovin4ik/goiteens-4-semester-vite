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
			name="${name ? name : id}"
			class="${twMerge(`text-black placeholder:text-black dark:text-white dark:placeholder:text-white/80 text-md outline-none 	px-1 py-2 border-ios bg-white/30 backdrop-blur-3xl block rounded-md ${className}`)}" 
			${id ? `id="${id}"` : ''} 
			${attrsString}
			${require ? 'required' : ''}
		/>
	`
}
