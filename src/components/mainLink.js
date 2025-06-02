export function mainLink(children, link, className) {
	return `
		<a href="${link}" class="text-lg transition-colors duration-300 ease-in-out hover:text-primary ${className}">
			${children}
		</a>
	`
}
