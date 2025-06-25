import { codeToHtml } from 'shiki'
import { twMerge } from 'tailwind-merge'

interface Props {
	lang?: string
	className?: string
	code: string
}

export async function codePreview({ lang = 'js', className, code }: Props) {
	const div = document.createElement('div') as HTMLElement

	div.className = twMerge(
		`flex flex-col justify-center items-center relative w-[80%] aspect-video max-h-[337px] rounded-md overflow-hidden ${className} font-jetBrainsMono`
	)

	const htmlCode = await codeToHtml(code, {
		lang: lang === 'hbs' ? 'html' : lang,
		theme: 'kanagawa-wave'
	})

	div.innerHTML = `
		<div class="absolute top-0 left-0 right-0 flex flex-row items-center justify-between px-2 py-1 bg-[#1f1f28]">
			<span class="text-sm text-white/60 text-right w-full">${lang}</span>
		</div>
		${htmlCode}
	`

	return div
}
