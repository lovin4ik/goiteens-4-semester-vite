import Handlebars from 'handlebars'

import { useLocalStorage } from '@/utils/useLocalStorage'

import templateStudent from './template-student-data.hbs?raw'

interface IStudent {
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
		console.log(newStudent)
		studentsArray.push(newStudent)
		useLocalStorageSet(studentsArray)
		renderStudentsList()
	}

	function deleteStudent(index: number) {
		if (index < 0 || index >= studentsArray.length) {
			console.log('Некоректний індекс для видалення студента')
			return
		}

		console.log(index)
		studentsArray.splice(index, 1)
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
		const studentBtnDelete = document.querySelectorAll('#studentBtnDelete')

		if (!studentBtnDelete) return

		studentBtnDelete.forEach(btn => {
			btn.addEventListener('click', e => {
				const target = e.currentTarget as HTMLElement
				const indexStr = target.dataset.index
				if (indexStr !== undefined) {
					const index = parseInt(indexStr)
					if (!isNaN(index)) {
						deleteStudent(index)
					}
				}
			})
		})
	}

	studentForm?.addEventListener('submit', e => {
		e.preventDefault()

		const target = e.target as HTMLFormElement

		const firstName = (
			target.querySelector('#firstName') as HTMLInputElement
		).value.trim()
		const lastName = (
			target.querySelector('#lastName') as HTMLInputElement
		).value.trim()
		const ageStr = (
			target.querySelector('#age') as HTMLInputElement
		).value.trim()
		const courseStr = (
			target.querySelector('#course') as HTMLInputElement
		).value.trim()

		const age = Number(ageStr)
		const course = Number(courseStr)
		const faculty = (
			target.querySelector('#faculty') as HTMLInputElement
		).value.trim()

		if (isNaN(age)) {
			console.log('age is not a string type')
			return
		}

		if (isNaN(course)) {
			console.log('course is not a string type')
			return
		}

		if (firstName.length < 2) {
			console.log('first name is must be more than 2 characters')
			return
		}

		if (lastName.length < 2) {
			console.log('last name is must be more than 3 characters')
			return
		}

		if (age < 0) {
			console.log('age cannot be less than 0')
		}

		if (course < 0) {
			console.log('course cannot be less than 0')
		}

		const newStudent: IStudent = { firstName, lastName, age, course, faculty }
		addStudent(newStudent)
	})

	renderStudentsList()
}
