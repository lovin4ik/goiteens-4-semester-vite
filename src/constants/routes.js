import { firstLessonPage } from '../lessons/lesson1/firstLessonPage'
import { homePage } from '../pages/home'

export const routes = [
	{ path: '/', component: homePage },
	{ path: '/lessons/lesson1/', component: firstLessonPage }
]
