import { router } from '@/router/router'
import '@/styles/global.css'

window.addEventListener('DOMContentLoaded', () => {
	router()
})

window.addEventListener('hashchange', () => {
	router()
})
