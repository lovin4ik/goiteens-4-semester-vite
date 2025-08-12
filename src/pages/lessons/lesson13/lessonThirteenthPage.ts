import { lessonThirteenthInit } from './lessonThirteenthInit'

export function lessonThirteenthPage() {
	requestAnimationFrame(() => {
		lessonThirteenthInit()
	})

	return `
		<div>
			<h1 class="text-2xl font-bold">Lesson 13</h1>
			<p class="mt-1 text-gray-600">Відкрийте консоль на клавішу "F12"</p>
		</div>
	`
}
