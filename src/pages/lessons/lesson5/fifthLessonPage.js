import { chartTask } from '@/components/lesson5/chartTask/chartTask'
import { gameKeyBoard } from '@/components/lesson5/gameKeyBoard/gameKeyBoard'

import { heading } from '@/ui/heading'

import '@pnotify/core/dist/BrightTheme.css'
import '@pnotify/core/dist/PNotify.css'
import '@pnotify/mobile/dist/PNotifyMobile.css'

/**
 *
 * @returns {Promise<string>}
 */

export function fifthLessonPage() {
	return `
		<div class="flex flex-col justify-center items-center">
			${heading({ children: 'lesson-5', className: 'text-center mb-2' })}

			${gameKeyBoard()}
			
			${chartTask()}
		</div>
	`
}
