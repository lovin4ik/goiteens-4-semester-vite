import { PAGES } from '@/config/pages.config'

import { useSetTitle } from '@/utils/useSetTitle'

import { mainLink } from '@/shared/ui/mainLink'

export function notFoundPage(): string {
	useSetTitle('Not found page')
	return `
		<div class="min-h-screen flex items-center justify-center flex-col">
			<h1 class="text-center text-4xl font-bold">Сторінка не найдена</h1>
			<span class="text-[200px] font-bold -rotate-1">404</span>
			${mainLink({
				children: 'перейти на головну',
				link: PAGES.HOME,
				className:
					'bg-secondary px-4 py-2 rounded-md hover:text-black hover:bg-secondary/80  dark:bg-secondary/80 dark:hover:bg-secondary/90 dark:hover:text-white'
			})}	
		</div>
	`
}
