import { chartTask } from '@/components/lesson5/chartTask/chartTask'
import { gameKeyBoard } from '@/components/lesson5/gameKeyBoard/gameKeyBoard'

import { useSetTitle } from '@/utils/useSetTitle'

import { heading } from '@/shared/ui/heading'

import '@pnotify/core/dist/BrightTheme.css'
import '@pnotify/core/dist/PNotify.css'
import '@pnotify/mobile/dist/PNotifyMobile.css'

export function fifthLessonPage(): string {
	useSetTitle('lesson 5')

	return `
		<div class="min-h-full flex flex-col items-center">
			${heading({ children: 'lesson-5', className: 'text-center mb-2' })}

			${gameKeyBoard()}
			
			${chartTask()}
		</div>
	`
}
