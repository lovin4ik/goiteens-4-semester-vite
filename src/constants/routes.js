import { firstLessonPage } from '../lessons/lesson1/firstLessonPage'
import { homePage } from '../pages/home'
import { LINKS } from './links'

export const routes = [
	{ path: `${LINKS.HOME}`, component: homePage },
	{ path: `${LINKS.LESSON}1/`, component: firstLessonPage }
]
