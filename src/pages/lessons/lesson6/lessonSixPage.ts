import { useSetTitle } from '@/utils/useSetTitle'

import { codePreview } from '@/shared/ui/codePreview'
import { heading } from '@/shared/ui/heading'

const routerCode = `export async function router(): Promise<void> {
	// получення url адреси для перевірок в наступних кроках (з використанням хешингу url)
	const currentHash: string = window.location.hash || '#/'
	// Пошук маршруту, який відповідає поточному хешу (currentHash)
	const potentialMatch: IRoute | undefined = routes.find(
		(route: IRoute) => route.path === currentHash
	)
	// провірка на те що є potentialMatch якщо немає його тоді буде 404 якщо ні тоді сторінка яка знайшлась
	const view: TView = potentialMatch ? potentialMatch.component : notFoundPage

	// очікування на сторінку щоб її загрузити
	const html = await view()

	const layout = document.querySelector('#layout')!
	// перевірка на строку або на елемент
	if (typeof html === 'string') {
		layout.innerHTML = html
	} else if (html instanceof HTMLElement) {
	 	// очистка layout для коректної зміни сторінки
		layout.innerHTML = ''
		layout.appendChild(html)
	}
}
`

const routesCode = `
export interface IRoute {
	path: string
	component: () => Promise<string | HTMLElement> | string | HTMLElement
}

export const routes: IRoute[] = [
	{
		path: '#/',
		component: homePage
	}
]
`

export async function lessonSixPage() {
	useSetTitle('lesson 6')

	const div = document.createElement('div') as HTMLElement

	div.innerHTML = `
		${heading({
			children: 'lesson-6',
			className: 'text-center mb-2'
		})}	

		<p class="text-lg">Я написав свій проект через збірку vite vanilla TypeScript.</p>
		<p class="text-lg mt-0.5">Використовую технологію SPA - single page application, <br /> і зробив для неї свій роутінг.</p>
		
		<p class="text-xl mt-2">Як написати роутінг :</p>
		<p class="text-lg mt-0.5">код у <span class="font-bold">router.ts</span></p>

		<div class="routerCode mb-4"></div>

		<p class="text-lg mb-1">Для коректної роботи потрібний масив з об'єктами, <br /> в якіх є path і component.</p>
		<p class="text-lg mb-1">В path буде строка з url, а в component буде те що буде на екрані.</p>
		<p class="text-lg mb-1">'#' - потрібний для того щоб на github не мішав робити роутингу.</p>
		<p class="text-lg mb-1">В component передається функція яка повертає строку з html кодом або html елемент через створення document.createElement().</p>
		<p class="text-lg mb-0.5">Із-за TypeScript треба писати після document.createElement() as HTMLElement.</p>

		<div class="routesCode"></div>
	`

	div.querySelector('.routerCode')!.appendChild(
		await codePreview({
			lang: 'ts',
			code: routerCode
		})
	)

	div.querySelector('.routesCode')!.appendChild(
		await codePreview({
			lang: 'ts',
			code: routesCode
		})
	)

	return div
}
