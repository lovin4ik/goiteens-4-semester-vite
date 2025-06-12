import { router } from '@/router/router'
import '@/styles/style.scss'

window.addEventListener('DOMContentLoaded', () => {
	router()
})

window.addEventListener('hashchange', () => {
	router()
})
