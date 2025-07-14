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
			<label for="firstName">Ім'я:</label>
			${mainInput({ placeholder: "Ім'я", id: 'firstName', require: isRequired })}
			<label for="lastName">Фамілія:</label>
			${mainInput({ placeholder: 'Фамілія', id: 'lastName', require: isRequired })}
			<label for="lastName">Вік:</label>
			${mainInput({ placeholder: 'Вік', id: 'age', require: isRequired })}
			<label for="course">Курс:</label>
			${mainInput({ placeholder: 'Курс', id: 'course', require: isRequired })}
			<label for="faculty">Факультет:</label>
			${mainInput({ placeholder: 'Факультет', id: 'faculty', require: isRequired })}
			
			${mainBtn({
				children: 'Додати',
				attrs: {
					type: 'submit'
				}
			})}
		</form>
	`
}
