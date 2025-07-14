import Handlebars from 'handlebars'

import { modalTemplate } from '@/components/modal/modal'

import { useLocalStorage } from '@/utils/useLocalStorage'
import { useModal } from '@/utils/useModal'

import { formHtml } from '../lesson8/form/formHtml'

import studentsJson from './students.json'
import templateStudent from './template-student-data.hbs?raw'
import { mainBtn } from '@/shared/ui/mainBtn'

interface IStudent {
	id: number
	firstName: string
	lastName: string
	age: number
	course: string
	faculty: string
}

interface IInputStudent {
	firstName: string
	lastName: string
	age: number
	course: string
	faculty: string
}

const STUDENTS_KEY = 'studentsArrayNinth'
const templateStudentData = Handlebars.compile(templateStudent)

export function lessonNinthInit() {
	const studentList = document.querySelector('#studentList')
	const studentForm = document.querySelector('#studentForm')

	const { useLocalStorageGet, useLocalStorageSet } = useLocalStorage<
		IStudent[]
	>(STUDENTS_KEY, [])

	if (useLocalStorageGet()) {
		const initialData = studentsJson.map((el, i) => ({ ...el, id: i }))
		useLocalStorageSet(initialData)
	}

	const studentsArray = useLocalStorageGet()

	function addStudent(newStudent: IInputStudent) {
		studentsArray.push({
			id: studentsArray.length,
			...newStudent
		})
		useLocalStorageSet(studentsArray)
		renderStudentsList()
	}

	function removeStudent(index: number) {
		if (index < 0 || index >= studentsArray.length) {
			console.log('Некоректний індекс для видалення студента')
			return
		}

		studentsArray.splice(index, 1)
		useLocalStorageSet(studentsArray)
		renderStudentsList()
	}

	function updateStudent(index: number, data: IInputStudent) {
		if (index < 0 || index >= studentsArray.length) {
			console.log('Некоректний індекс для оновлення студента')
			return
		}

		studentsArray[index] = {
			id: studentsArray[index].id,
			...data
		}

		useLocalStorageSet(studentsArray)
		renderStudentsList()
	}

	function renderStudentsList() {
		if (!studentList) return

		studentList.innerHTML =
			studentsArray.length === 0
				? '<li>Ніяких студентів не найдено...</li>'
				: studentsArray
						.map((student, index) => {
							return templateStudentData({ ...student, index })
						})
						.join('')
	}

	studentList?.addEventListener('click', e => {
		const target = e.target as HTMLElement
		const app = document.querySelector('#app')
		if (!target || !app) return

		if (target.closest('button')?.className.includes('studentContextMenu')) {
			target.closest('button')
			const index = target.closest('button')?.dataset.index
			const studentContextMenuList = document.querySelector(
				`.studentContextMenuList[data-index="${index}"]`
			)

			const studentContextMenuLists = document.querySelectorAll(
				'.studentContextMenuList'
			)
			studentContextMenuLists.forEach(menu => {
				if (menu !== studentContextMenuList) menu.classList.add('hidden')
			})
			studentContextMenuList?.classList.toggle('hidden')
		}

		if (target.closest('button')?.className.includes('studentBtnDelete')) {
			const indexStr = target.closest('button')?.dataset.index
			const modal = modalTemplate(`
				<div class="text-center flex flex-col items-center justify-center">
					<p class="mb-4">Ви впевнені, що хочете видалити студента?</p>
					${mainBtn({
						children: 'Так',
						id: 'confirmDelete',
						className: 'w-[100px] mb-2'
					})}
					${mainBtn({
						children: 'Ні',
						id: 'cancelDelete',
						className: 'w-[100px]'
					})}
				</div>
			`)

			app.appendChild(modal)

			const { openModal, closeModal } = useModal()
			openModal()

			modal.querySelector('#confirmDelete')?.addEventListener('click', () => {
				if (indexStr !== undefined) {
					const index = parseInt(indexStr)
					if (!isNaN(index)) {
						removeStudent(index)
						closeModal()
						modal.remove()
					}
				}
			})

			modal.querySelector('#cancelDelete')?.addEventListener('click', () => {
				closeModal()
			})
		}

		if (target.closest('button')?.className.includes('studentBtnEdit')) {
			const index = target.closest('button')?.dataset.index
			if (!index) return
			const modal = modalTemplate(
				`${formHtml({
					id: 'modalStudentForm',
					isRequired: false
				})}`
			)

			app.appendChild(modal)

			const { openModal, closeModal } = useModal()
			openModal()

			const parsedIndex = parseInt(index)
			if (isNaN(parsedIndex)) return
			const student = studentsArray[parsedIndex]

			const fields: (keyof IInputStudent)[] = [
				'firstName',
				'lastName',
				'age',
				'course',
				'faculty'
			]

			const form = modal.querySelector<HTMLFormElement>('#modalStudentForm')

			fields.forEach(field => {
				const input = form?.elements.namedItem(field) as HTMLInputElement | null
				if (input) {
					const value = student[field]
					input.value = typeof value === 'number' ? value.toString() : value
				}
			})

			form?.addEventListener('submit', e => {
				e.preventDefault()
				const target = (e.target as HTMLFormElement)?.elements as unknown as {
					firstName: HTMLInputElement
					lastName: HTMLInputElement
					age: HTMLInputElement
					course: HTMLInputElement
					faculty: HTMLInputElement
				}

				const age = Number(target.age.value)

				if (isNaN(age)) {
					console.log('некоректний вік')
				}

				const newStudent: IInputStudent = {
					firstName: target.firstName.value,
					lastName: target.lastName.value,
					age: age,
					course: target.course.value,
					faculty: target.faculty.value
				}

				updateStudent(parsedIndex, newStudent)
				closeModal()
			})
		}
	})

	studentForm?.addEventListener('submit', e => {
		e.preventDefault()
		const target = (e.target as HTMLFormElement)?.elements as unknown as {
			firstName: HTMLInputElement
			lastName: HTMLInputElement
			age: HTMLInputElement
			course: HTMLInputElement
			faculty: HTMLInputElement
		}

		const age = Number(target.age.value)

		if (isNaN(age)) {
			console.log('некоректний вік')
		}

		const newStudent: IInputStudent = {
			firstName: target.firstName.value,
			lastName: target.lastName.value,
			age: age,
			course: target.course.value,
			faculty: target.faculty.value
		}

		addStudent(newStudent)
	})

	renderStudentsList()
}
