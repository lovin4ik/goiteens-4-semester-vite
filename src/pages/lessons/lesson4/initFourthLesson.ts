import { initFourthLessonNode } from './initFourthLessonNode'

export function initFourthLesson() {
	const beginBtn = document.querySelector('#beginBtn')

	beginBtn?.addEventListener('click', initFourthLessonNode)
}
