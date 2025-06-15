import { twMerge } from 'tailwind-merge'

interface MainLinkProps {
	children: string
	link: string
	className?: string
	target?: '_self' | '_blank' | '_parent' | '_top' | 'framename'
}

export function mainLink({
	children,
	link,
	className,
	target = '_self'
}: MainLinkProps): string {
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
