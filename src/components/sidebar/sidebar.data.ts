import { PAGES } from '@/config/pages.config.js'

export interface ILesson {
	id: number
	title: string
	link: string
}

export const LESSONS: ILesson[] = [
	{
		id: 1,
		title: 'Оптимізація подій',
		link: `${PAGES.LESSON}1/`
	},
	{
		id: 2,
		title: 'Бібліотека Lodash. Throttle і Debounce',
		link: `${PAGES.LESSON}2/`
	},
	{
		id: 3,
		title: 'Концепція Intersection Observer (Практика)',
		link: `${PAGES.LESSON}3/`
	},
	{
		id: 4,
		title: 'Знайомство з Node.js та Пакетний менеджер npm',
		link: `${PAGES.LESSON}4/`
	},
	{
		id: 5,
		title: 'Бібліотеки та фреймворки',
		link: `${PAGES.LESSON}5/`
	},
	{
		id: 6,
		title: 'Модульність коду. Бандлер JS-модулів Parcel',
		link: `${PAGES.LESSON}6/`
	},
	{
		id: 7,
		title: 'Шаблонізація. Handlebars',
		link: `${PAGES.LESSON}7/`
	},
	{
		id: 8,
		title: 'Формат даних JSON',
		link: `${PAGES.LESSON}8/`
	},
	{
		id: 9,
		title: 'Веб-сховище',
		link: `${PAGES.LESSON}9/`
	},
	{
		id: 10,
		title: 'Асинхронність',
		link: `${PAGES.LESSON}10/`
	},
	{
		id: 11,
		title: 'Таймери',
		link: `${PAGES.LESSON}11/`
	},
	{
		id: 12,
		title: 'Дата та час',
		link: `${PAGES.LESSON}12/`
	},
	{
		id: 13,
		title: 'Проміси',
		link: `${PAGES.LESSON}13/`
	},
	{
		id: 14,
		title: 'Методи класу Promise. Цикл подій',
		link: `${PAGES.LESSON}14/`
	},
	{
		id: 15,
		title: 'HTTP запити 1. REST API',
		link: `${PAGES.LESSON}15/`
	},
	{
		id: 16,
		title: 'HTTP-запити 2. AJAX',
		link: `${PAGES.LESSON}16/`
	},
	{
		id: 17,
		title: 'Пагінація',
		link: `${PAGES.LESSON}17/`
	},
	{
		id: 18,
		title: 'CRUD взаємодії з ресурсами бекенду',
		link: `${PAGES.LESSON}18/`
	},
	{
		id: 19,
		title: 'Асинхронні функції async/await',
		link: `${PAGES.LESSON}19/`
	},
	{
		id: 20,
		title: 'Міні-проєкт: асинхронні функції async/await',
		link: `${PAGES.LESSON}20/`
	}
]
