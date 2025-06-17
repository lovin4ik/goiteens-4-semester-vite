import { codeToHtml } from 'shiki'
import { twMerge } from 'tailwind-merge'

interface Props {
	lang?: string
	className?: string
	fileName?: string
	code: string
}

export async function codePreview({
	lang = 'js',
	className,
	fileName,
	code
}: Props) {
	const div = document.createElement('div') as HTMLElement

	div.className = twMerge(
		`flex flex-col justify-center items-center relative w-[80%] aspect-video max-h-[337px] rounded-md overflow-hidden ${className} font-jetBrainsMono`
	)

	const htmlCode = await codeToHtml(code, {
		lang: lang,
		theme: 'kanagawa-wave'
	})

	div.innerHTML = `
		<div class="absolute top-0 left-0 right-0 flex flex-row items-center justify-between px-4 py-2">
			<span class="text-sm text-white/60 absolute right-2 top-2">${fileName}.${lang}</span>
		</div>
		${htmlCode}
	`

	return div
}
