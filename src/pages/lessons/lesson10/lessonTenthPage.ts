import { lessonTenthInit } from './lessonTenthInit'
import { mainBtn } from '@/shared/ui/mainBtn'
import { mainInput } from '@/shared/ui/mainInput'

export function lessonTenthPage() {
	requestAnimationFrame(() => {
		lessonTenthInit()
	})
	return `
		<div>
			<h1 class="text-2xl font-bold">lesson 10</h1>
			<div class="mt-4">
				<h2 class="text-lg font-bold">Завдання 1</h2>
				${mainBtn({
					children: 'розпочати',
					className: 'startBtn__firstTask'
				})}
			</div>

			<h2 class="text-lg font-bold mt-4">Завдання 2</h2>
			
			<div class="mt-2 rounded-full block border-8 border-solid border-r-primary border-t-gray-500 border-l-gray-500 border-b-gray-500 w-12 h-12 transition-transform duration-1000 task2__loading"></div>
			
			
			<div class="task3 mt-4">
				<h2 class="text-lg font-bold">Завдання 3</h2>
				
				<div class="task3__container m-2">
					${mainBtn({
						children: 'Натисни на мене',
						className: 'task3__btn'
					})}
					${mainBtn({
						children: 'Натисни на мене',
						className: 'task3__btn'
					})}
					${mainBtn({
						children: 'Натисни на мене',
						className: 'task3__btn'
					})}
					${mainBtn({
						children: 'Натисни на мене',
						className: 'task3__btn'
					})}
				</div>

				<p class="task3__score">0</p>
				${mainBtn({
					children: 'Запустити гру',
					className: 'task3__startBtn'
				})}
			</div>
			
			<div class="mt-4">
				${mainInput({
					placeholder: 'Встановіть час у секундах:',
					id: 'setDurationInput'
				})}

				<span class="resultTask4 block mt-2">Повідомлення...</span>

				${mainBtn({
					children: 'Запустити',
					id: 'startBtnTask4',
					className: 'mt-2'
				})}
			</div>
		</div>
	`
}
