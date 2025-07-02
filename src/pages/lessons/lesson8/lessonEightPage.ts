import { lessonEightInit } from './lessonEightInit'
import { heading } from '@/shared/ui/heading'
import { mainBtn } from '@/shared/ui/mainBtn'
import { mainInput } from '@/shared/ui/mainInput'

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

			<h3>Додати студента:</h3>
			
			<form id="studentForm" class="flex flex-col items-baseline justify-baseline gap-2 mt-1.5">
				<label for="firstName">
					Ім'я: 
					${mainInput({ placeholder: "Ім'я", id: 'firstName', require: true })}
				</label>
				<label for="lastName">
					Фамілія: 
					${mainInput({ placeholder: 'Фамілія', id: 'lastName', require: true })}
				</label>
				<label for="lastName">
					Вік: 
					${mainInput({ placeholder: 'Вік', id: 'age', require: true })}
				</label>
				<label for="course">
					Курс: 
					${mainInput({ placeholder: 'Курс', id: 'course', require: true })}
				</label>
				<label for="faculty">
					Факультет: 
					${mainInput({ placeholder: 'Факультет', id: 'faculty', require: true })}
				</label>

				${mainBtn({ children: 'Додати' })}
			</form>

			<h3 class="mt-2">Список студентів:</h3>
			<ul id="studentList" class="mt-1 flex flex-col gap-2"></ul>
		</div>
	`
}
