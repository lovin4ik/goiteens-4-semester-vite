import { firstLessonPage } from '@/lessons/lesson1/firstLessonPage'
import { secondLessonPage } from '@/lessons/lesson2/secondLessonPage'
import { thirdLessonPage } from '@/lessons/lesson3/thirdLessonPage'
import { homePage } from '@/pages/home'
import { practicePage } from '@/pages/practice/practicePage'
import { LINKS } from './links'

export const routes = [
	{ path: `${LINKS.HOME}`, component: homePage },
	{ path: `${LINKS.LESSON}1/`, component: firstLessonPage },
	{ path: `${LINKS.LESSON}2/`, component: secondLessonPage },
	{ path: `${LINKS.LESSON}3/`, component: thirdLessonPage },
	{ path: `${LINKS.PRACTICE}/`, component: practicePage }
]
