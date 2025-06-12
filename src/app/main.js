import { router } from '@/router/router'
import '@/styles/style.css'

window.addEventListener('DOMContentLoaded', () => {
	router()
})

window.addEventListener('hashchange', () => {
	router()
})
