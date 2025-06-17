import { sidebar } from '@/components/sidebar/sidebar'

import { router } from '@/router/router'
import '@/styles/global.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
	${sidebar()}

	<main 
		class="col-start-2 col-end-3 row-start-1 row-end-3 pt-2 h-full overflow-auto max-h-screen"
		id="layout"
	></main>
`

window.addEventListener('DOMContentLoaded', () => {
	router()
})

window.addEventListener('hashchange', () => {
	router()
})
