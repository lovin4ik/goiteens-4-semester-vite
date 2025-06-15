import { LINKS } from '@/config/links'

/**
 * @typedef {Object} Route
 * @property {string} path
 * @property {string} component
 */

/**
 * @type {Route[]}
 */
export const routes = [
	{
		path: `${LINKS.HOME}`,
		component: async () => {
			const res = await import('@/pages/homePage.js')
			return res.homePage()
		}
	},
	{
		path: `${LINKS.LESSON}1/`,
		component: async () => {
			const res = await import('@/pages/lessons/lesson1/firstLessonPage.js')
			return res.firstLessonPage()
		}
	},
	{
		path: `${LINKS.LESSON}2/`,
		component: async () => {
			const res = await import('@/pages/lessons/lesson2/secondLessonPage.js')
			return res.secondLessonPage()
		}
	},
	{
		path: `${LINKS.LESSON}3/`,
		component: async () => {
			const res = await import('@/pages/lessons/lesson3/thirdLessonPage.js')
			return res.thirdLessonPage()
		}
	},
	{
		path: `${LINKS.LESSON}4/`,
		component: async () => {
			const res = await import('@/pages/lessons/lesson4/fourthLessonPage.js')
			return res.fourthLessonPage()
		}
	},
	{
		path: `${LINKS.LESSON}5/`,
		component: async () => {
			const res = await import('@/pages/lessons/lesson5/fifthLessonPage.js')
			return res.fifthLessonPage()
		}
	}
]
