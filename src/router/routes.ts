import { PAGES } from '@/config/pages.config'

import { homePage } from '@/pages/homePage'
import { firstLessonPage } from '@/pages/lessons/lesson1/firstLessonPage'
import { secondLessonPage } from '@/pages/lessons/lesson2/secondLessonPage'
import { thirdLessonPage } from '@/pages/lessons/lesson3/thirdLessonPage'
import { fourthLessonPage } from '@/pages/lessons/lesson4/fourthLessonPage'
import { fifthLessonPage } from '@/pages/lessons/lesson5/fifthLessonPage'
import { lessonSixPage } from '@/pages/lessons/lesson6/lessonSixPage'
import { lessonSeventhPage } from '@/pages/lessons/lesson7/lessonSeventhPage'
import { lessonEightPage } from '@/pages/lessons/lesson8/lessonEightPage'

export interface IRoute {
	path: string
	component: () => Promise<string | HTMLElement> | string | HTMLElement
}

export const routes: IRoute[] = [
	{
		path: `${PAGES.HOME}`,
		component: homePage
	},
	{
		path: `${PAGES.LESSON}1/`,
		component: firstLessonPage
	},
	{
		path: `${PAGES.LESSON}2/`,
		component: secondLessonPage
	},
	{
		path: `${PAGES.LESSON}3/`,
		component: thirdLessonPage
	},
	{
		path: `${PAGES.LESSON}4/`,
		component: fourthLessonPage
	},
	{
		path: `${PAGES.LESSON}5/`,
		component: fifthLessonPage
	},
	{
		path: `${PAGES.LESSON}6/`,
		component: lessonSixPage
	},
	{
		path: `${PAGES.LESSON}7/`,
		component: lessonSeventhPage
	},
	{
		path: `${PAGES.LESSON}8/`,
		component: lessonEightPage
	}
]
