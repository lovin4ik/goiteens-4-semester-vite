import { useSetTitle } from '@/utils/useSetTitle'

import { heading } from '@/shared/ui/heading'

export function lessonSixPage() {
	useSetTitle('lesson 6')
	return `
		<div class="">
			${heading({
				children: 'lesson-6',
				className: 'text-center'
			})}		
		</div>
	`
}
