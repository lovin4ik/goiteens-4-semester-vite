import { chartTask } from '@/components/lesson5/chartTask/chartTask'
import { gameKeyBoard } from '@/components/lesson5/gameKeyBoard/gameKeyBoard'

import { heading } from '@/ui/heading'

import { initFifthLesson } from './lesson5'

import '@pnotify/core/dist/BrightTheme.css'
import '@pnotify/core/dist/PNotify.css'
import '@pnotify/mobile/dist/PNotifyMobile.css'

/**
 * @returns {string}
 */

export function fifthLessonPage() {
	requestAnimationFrame(() => {
		initFifthLesson()
	})

	return `
		${heading({ children: 'lesson-1', className: 'text-center mb-2' })}

		${gameKeyBoard()}

		${chartTask()}
	`
}
