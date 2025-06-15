import { codeToHtml } from 'shiki'
import { twMerge } from 'tailwind-merge'

export const codeShiki = async ({
	lang = 'js',
	theme = 'kanagawa-wave',
	fileName = '',
	code,
	classNameCode = '',
	classNameContainer = '',
	attrs
}) => {
	const html = await codeToHtml(code, {
		lang: lang,
		theme: theme,
		...attrs
	})

	return `
		<div class="${twMerge(`max-w-[80%] h-[240px] overflow-hidden rounded-md relative ${classNameContainer}`)}">

			<div class="${twMerge(`absolute top-0 left-0 w-full bg-[#1f1f28] flex items-center justify-between px-2 py-1 ${classNameCode}`)}">
				<span class="text-white/70 text-xs font-bold">
					${fileName ? fileName + `.${lang}` : 'file.' + lang}
				</span>
			</div>

			${html}
		</div>
	`
}
