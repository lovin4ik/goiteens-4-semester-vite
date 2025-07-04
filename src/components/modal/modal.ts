export const modalTemplate = (children: string): HTMLElement => {
	const backdrop = document.createElement('div') as HTMLElement
	backdrop.id = 'backdrop'
	backdrop.className =
		'bg-black/5 backdrop-blur-[1px] h-screen w-screen absolute flex flex-col items-center justify-center top-0 left-0 right-0 bottom-0 transition-all hidden'

	backdrop.innerHTML = `
		<div class="bg-bg/10 shadow-ios backdrop-blur-[5px] rounded-lg px-6 py-8 relative transition-all" id="modal">
			<button class="absolute top-2 right-2" id="modalBtnClose">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
			</button>
			${children}
		</div>
	`

	return backdrop
}
