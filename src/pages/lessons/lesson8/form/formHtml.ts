import { mainBtn } from '@/shared/ui/mainBtn'
import { mainInput } from '@/shared/ui/mainInput'

export function formHtml({
	id,
	isRequired
}: {
	id?: string
	isRequired: boolean
}) {
	return `
		<form id="${id}" class="flex flex-col items-baseline justify-baseline gap-2 mt-1.5">
			<label for="firstName">
				Ім'я: 
				${mainInput({ placeholder: "Ім'я", id: 'firstName', require: isRequired })}
				</label>
			<label for="lastName">
			Фамілія: 
				${mainInput({ placeholder: 'Фамілія', id: 'lastName', require: isRequired })}
			</label>
			<label for="lastName">
				Вік: 
				${mainInput({ placeholder: 'Вік', id: 'age', require: isRequired })}
				</label>
			<label for="course">
				Курс: 
				${mainInput({ placeholder: 'Курс', id: 'course', require: isRequired })}
			</label>
			<label for="faculty">
				Факультет: 
				${mainInput({ placeholder: 'Факультет', id: 'faculty', require: isRequired })}
			</label>
			
			${mainBtn({ children: 'Додати' })}
		</form>
	`
}
