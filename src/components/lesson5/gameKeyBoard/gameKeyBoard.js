import { mainBtn } from '@/ui/mainBtn'

export function gameKeyBoard() {
	return `
		<div class="flex flex-col items-center justify-center">
			<h3>Натисніть на показану клавішу</h3>
			<span class="font-bold" id="key"></span>
			<span class="text-sm mt-2" id="timer">Час: 0.0 c</span>
			<span class="text-sm mt-2" id="betterTimer">Найкращий час: 0.0 c</span>

			${mainBtn('Нова гра', 'newGameBtn', 'mt-2')}
		</div>
	`
}
