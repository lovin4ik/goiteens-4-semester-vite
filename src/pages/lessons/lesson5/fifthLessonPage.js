import { chartTask } from '@/components/lesson5/chartTask/chartTask'
import { gameKeyBoard } from '@/components/lesson5/gameKeyBoard/gameKeyBoard'

import { heading } from '@/ui/heading'
import { mainLink } from '@/ui/mainLink'

import { LINKS } from '@/config/links'

import { initFifthLesson } from './lesson5'

import '@pnotify/core/dist/BrightTheme.css'
import '@pnotify/core/dist/PNotify.css'
import '@pnotify/mobile/dist/PNotifyMobile.css'

export function fifthLessonPage() {
	requestAnimationFrame(() => {
		initFifthLesson()
	})

	return `
		${mainLink('Go to home', LINKS.HOME)}

		${heading('lesson-5', 'text-center mb-2')}

		${gameKeyBoard()}

		${chartTask()}
	`
}
