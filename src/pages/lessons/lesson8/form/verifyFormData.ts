import type { IStudent } from '../lessonEightInit'

interface Props {
	e: Event
}

export function verifyFormData({ e }: Props): IStudent | void {
	const target = e.target as HTMLFormElement

	const firstName = (
		target.querySelector('#firstName') as HTMLInputElement
	).value.trim()
	const lastName = (
		target.querySelector('#lastName') as HTMLInputElement
	).value.trim()
	const ageStr = (target.querySelector('#age') as HTMLInputElement).value.trim()
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

	target.reset()
	const newStudent: IStudent = { firstName, lastName, age, course, faculty }

	return newStudent
}
