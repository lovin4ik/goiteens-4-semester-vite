export const useModal = () => {
	const backdrop = document.querySelector('#backdrop')
	const modal = document.querySelector('#modal')

	if (!backdrop || !modal) {
		throw new Error('Modal elements not found in the document')
	}

	const btnClose = backdrop.querySelector('#modalBtnClose')

	if (!btnClose) {
		throw new Error('closeBtn not find')
	}

	const openModal = () => {
		backdrop.classList.remove('hidden')
		modal.classList.add('active')

		window.addEventListener('keydown', handleEsc)
	}

	const closeModal = () => {
		backdrop.classList.add('hidden')
		modal.classList.remove('active')

		backdrop.remove()

		window.removeEventListener('keydown', handleEsc)
	}

	btnClose.addEventListener('click', () => {
		closeModal()
	})

	backdrop.addEventListener('click', () => {
		closeModal()
	})

	modal.addEventListener('click', e => {
		e.stopPropagation()
	})

	const handleEsc = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			closeModal()
		}
	}

	return { openModal, closeModal }
}
