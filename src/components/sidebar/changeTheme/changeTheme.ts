import { useLocalStorage } from '@/utils/useLocalStorage'

import { mainBtn } from '@/shared/ui/mainBtn'

const { useLocalStorageSet, useLocalStorageGet } = useLocalStorage<string>(
	'currentTheme',
	''
)

function getSystemTheme(): 'dark' | 'light' {
	return window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light'
}

function applyTheme(theme: string) {
	document.documentElement.classList.remove('dark', 'light')
	if (theme === '') {
		const systemTheme = getSystemTheme()
		if (systemTheme === 'dark') {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.add('light')
		}
	} else {
		document.documentElement.classList.add(theme)
	}
}

function handleChangeTheme() {
	const currentTheme = useLocalStorageGet()
	const systemTheme = getSystemTheme()

	let newTheme: string

	if (currentTheme === '') {
		// Якщо зараз тема браузера, перемикаємо на протилежну
		newTheme = systemTheme === 'dark' ? 'light' : 'dark'
	} else if (currentTheme === 'dark') {
		newTheme = 'light'
	} else if (currentTheme === 'light') {
		newTheme = 'dark'
	} else {
		newTheme = ''
	}

	useLocalStorageSet(newTheme)
	applyTheme(newTheme)
	renderThemeBtn()
}

const moon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-icon lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`

const sun = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`

function changeThemeBtn() {
	const currentTheme = useLocalStorageGet()
	const icon = currentTheme === 'light' ? moon : sun

	return `
		${mainBtn({
			children: icon,
			id: 'changeTheme',
			className:
				'bg-transparent hover:bg-transparent text-black p-0 hover:text-primary dark:bg-transparent dark:text-white dark:hover:bg-transparent'
		})}
	`
}

export function renderThemeBtn() {
	const container = document.getElementById('themeBtnContainer')
	if (container) {
		container.innerHTML = changeThemeBtn()
		const btn = container.querySelector('#changeTheme')
		btn?.addEventListener('click', handleChangeTheme)
		applyTheme(useLocalStorageGet())
	}
}
