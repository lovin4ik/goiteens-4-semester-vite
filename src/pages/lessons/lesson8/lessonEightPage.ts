import { formHtml } from './form/formHtml'
import { lessonEightInit } from './lessonEightInit'
import { heading } from '@/shared/ui/heading'

export function lessonEightPage() {
	requestAnimationFrame(() => {
		lessonEightInit()
	})

	return `
		<div>
			${heading({
				children: 'Формат JSON | lesson 8',
				className: 'mb-3'
			})}

			
			<div class="flex flex-row gap-12 items-center justify-baseline">
				<div class="">
					<h3>Додати студента:</h3>
					${formHtml({
						id: 'studentForm',
						isRequired: true
					})}
				</div>
				
				<div class="flex flex-col">
					<h3 class="mt-2">Список студентів:</h3>
					<ul id="studentList" class="mt-1 flex flex-col gap-2"></ul>
				</div>
			</div>
		</div>
	`
}
