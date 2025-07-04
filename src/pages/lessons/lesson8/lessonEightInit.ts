import Handlebars from 'handlebars'

import { modalTemplate } from '@/components/modal/modal'

import { useLocalStorage } from '@/utils/useLocalStorage'
import { useModal } from '@/utils/useModal'

import { formHtml } from './form/formHtml'
import { verifyFormData } from './form/verifyFormData'
import templateStudent from './template-student-data.hbs?raw'
import { mainBtn } from '@/shared/ui/mainBtn'

export interface IStudent {
	firstName: string
	lastName: string
	age: number
	course: number
	faculty: string
}

const STUDENTS_KEY = 'studentsArray'
const templateStudentData = Handlebars.compile(templateStudent)

export function lessonEightInit() {
	const studentList = document.querySelector('#studentList')
	const studentForm = document.querySelector('#studentForm')

	const { useLocalStorageGet, useLocalStorageSet } = useLocalStorage<
		IStudent[]
	>(STUDENTS_KEY, [])

	const studentsArray: IStudent[] = useLocalStorageGet()

	function addStudent(newStudent: IStudent) {
		studentsArray.push(newStudent)
		useLocalStorageSet(studentsArray)
		renderStudentsList()
	}

	function deleteStudent(index: number) {
		if (index < 0 || index >= studentsArray.length) {
			console.log('Некоректний індекс для видалення студента')
			return
		}

		studentsArray.splice(index, 1)
		useLocalStorageSet(studentsArray)
		renderStudentsList()
	}

	function updateStudent(index: number, data: IStudent) {
		if (index < 0 || index >= studentsArray.length) {
			console.log('Некоректний індекс для оновлення студента')
			return
		}

		studentsArray[index] = {
			firstName: data.firstName,
			lastName: data.lastName,
			age: data.age,
			course: data.course,
			faculty: data.faculty
		}
		useLocalStorageSet(studentsArray)
		renderStudentsList()
	}

	function renderStudentsList() {
		if (!studentList) return

		studentList.innerHTML = `
		${
			studentsArray.length == 0
				? '<li>Ніяких студентів не найдено...</li>'
				: studentsArray
						.map((student, index) => {
							return templateStudentData({ ...student, index })
						})
						.join('')
		}
		`
		const studentsContextMenu = document.querySelectorAll('.studentContextMenu')

		studentsContextMenu.forEach(btn => {
			btn.addEventListener('click', e => {
				e.stopPropagation()
				const index = (btn as HTMLElement).dataset.index
				const menu = document.querySelector(
					`.studentContextMenuList[data-index="${index}"]`
				)
				if (!menu) return

				document.querySelectorAll('.studentContextMenuList').forEach(m => {
					if (m !== menu) m.classList.add('hidden')
				})

				menu.classList.toggle('hidden')

				const app = document.querySelector('#app')
				if (!app) return

				const deleteBtn = document.querySelector(
					`.studentBtnDelete[data-index="${index}"]`
				)

				if (!deleteBtn) return

				deleteBtn.addEventListener('click', e => {
					const currentTarget = e.currentTarget as HTMLElement
					const indexStr = currentTarget.dataset.index

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

					modal
						.querySelector('#confirmDelete')
						?.addEventListener('click', () => {
							if (indexStr !== undefined) {
								const index = parseInt(indexStr)
								if (!isNaN(index)) {
									deleteStudent(index)
									closeModal()
									modal.remove()
								}
							}
						})

					modal
						.querySelector('#cancelDelete')
						?.addEventListener('click', () => {
							closeModal()
							modal.remove()
						})
				})

				const editBtn = document.querySelector(
					`.studentBtnEdit[data-index="${index}"]`
				)

				if (!editBtn) return

				editBtn.addEventListener('click', () => {
					const modal = modalTemplate(
						`${formHtml({
							id: 'modalStudentForm',
							isRequired: false
						})}`
					)

					app.appendChild(modal)

					const { openModal, closeModal } = useModal()
					openModal()

					if (typeof index == 'undefined') return

					const parsedIndex = parseInt(index)
					if (isNaN(parsedIndex)) return
					const student = studentsArray[parsedIndex]

					const form = modal.querySelector<HTMLFormElement>('#modalStudentForm')

					if (!form) return

					const fields: (keyof IStudent)[] = [
						'firstName',
						'lastName',
						'age',
						'course',
						'faculty'
					]

					fields.forEach(field => {
						const input = form.elements.namedItem(
							field
						) as HTMLInputElement | null
						if (input) {
							// Якщо поле числове, приводимо до рядка
							const value = student[field]
							input.value = typeof value === 'number' ? value.toString() : value
						}
					})
					form.addEventListener('submit', e => {
						e.preventDefault()

						const newStudent = verifyFormData({ e })
						if (!newStudent) return

						updateStudent(parsedIndex, newStudent)
						closeModal()
					})
				})
			})
		})
	}

	studentForm?.addEventListener('submit', e => {
		e.preventDefault()

		const newStudent = verifyFormData({ e })

		if (!newStudent) return

		addStudent(newStudent)
	})

	renderStudentsList()
}
