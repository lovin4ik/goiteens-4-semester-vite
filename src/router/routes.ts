import type { IRoute } from '@/types/route.type'

import { LINKS } from '@/config/links'

import { homePage } from '@/pages/homePage'
import { firstLessonPage } from '@/pages/lessons/lesson1/firstLessonPage'
import { secondLessonPage } from '@/pages/lessons/lesson2/secondLessonPage'
import { thirdLessonPage } from '@/pages/lessons/lesson3/thirdLessonPage'
import { fourthLessonPage } from '@/pages/lessons/lesson4/fourthLessonPage'
import { fifthLessonPage } from '@/pages/lessons/lesson5/fifthLessonPage'

export const routes: IRoute[] = [
	{
		path: `${LINKS.HOME}`,
		component: homePage
	},
	{
		path: `${LINKS.LESSON}1/`,
		component: firstLessonPage
	},
	{
		path: `${LINKS.LESSON}2/`,
		component: secondLessonPage
	},
	{
		path: `${LINKS.LESSON}3/`,
		component: thirdLessonPage
	},
	{
		path: `${LINKS.LESSON}4/`,
		component: fourthLessonPage
	},
	{
		path: `${LINKS.LESSON}5/`,
		component: fifthLessonPage
	}
]
