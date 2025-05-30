import { router } from './router'
import './style.css'

window.addEventListener('DOMContentLoaded', () => {
	router()
})

window.addEventListener('hashchange', () => {
	router()
})
