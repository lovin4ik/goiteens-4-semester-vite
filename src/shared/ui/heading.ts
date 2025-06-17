import { twMerge } from 'tailwind-merge'

interface HeadingProps {
	children: string
	className?: string
}
export function heading({ children, className }: HeadingProps): string {
	return `
		<h1 class="${twMerge(`text-2xl font-bold ${className}`)}">
			${children}
		</h1>
	`
}
