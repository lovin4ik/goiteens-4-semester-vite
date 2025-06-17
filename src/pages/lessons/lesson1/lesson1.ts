import type { firstLessonImgs } from '@/types/firstLessonImgs.interface'

import { FIRST_LESSON_IMAGES } from './lesson1-images'

export function initFirstLesson() {
	const imageGallery = document.querySelector('#imageGallery')
	const lightbox = document.querySelector('#lightbox')
	const lightboxContent = document.querySelector('.lightbox__content')
	const btnClose = document.querySelector('.lightbox__button')
	const IS_OPEN = 'is-open'
	const arrowLeft = document.querySelector('.arrow-left')
	const arrowRight = document.querySelector('.arrow-right')
	let lightboxImages: NodeListOf<HTMLImageElement>
	let slideWidth = 0
	let currentPosition = 0

	if (
		!imageGallery ||
		!lightbox ||
		!lightboxContent ||
		!btnClose ||
		!arrowLeft ||
		!arrowRight
	) {
		console.warn('Один або кілька елементів галереї не знайдено!')
		return
	}

	imageGallery.innerHTML = FIRST_LESSON_IMAGES.map(
		(element: firstLessonImgs) => {
			return `
			<li class="gallery__item">
				<div class="gallery__link">
					<img
						class="gallery__image rounded-md bg-white/10"
						src="${element.preview}"
						data-source="${element.original}"
						alt="${element.description}"
						loading="lazy"
					/>
				</div>
			</li>
		`
		}
	).join('')

	const moveSlide = () => {
		if (currentPosition < 0) {
			currentPosition = lightboxImages.length - 1
		} else if (currentPosition > lightboxImages.length - 1) {
			currentPosition = 0
		}
		lightboxImages.forEach(image => {
			image.style.transform = `translateX(-${currentPosition * slideWidth}px)`
		})
	}

	imageGallery.addEventListener('click', (e: Event) => {
		const target = e.target as HTMLImageElement
		if (target.nodeName !== 'IMG') return

		lightbox.classList.add(IS_OPEN)
		lightboxContent.innerHTML = FIRST_LESSON_IMAGES.map(image => {
			return `<img class="lightbox__image rounded-md" src="${image.original}" alt="${image.description}" />`
		}).join('')

		lightboxImages = document.querySelectorAll('.lightbox__image')

		slideWidth = lightboxImages[0].clientWidth + 30

		lightbox.addEventListener('click', (e: Event) => {
			const target = e.target as HTMLElement
			if (target.nodeName === 'IMG') return
			lightbox.classList.remove(IS_OPEN)
		})

		currentPosition = FIRST_LESSON_IMAGES.findIndex(image => {
			return image.description === target.alt
		})

		moveSlide()
	})

	btnClose.addEventListener('click', e => {
		e.stopPropagation()
		lightbox.classList.remove(IS_OPEN)
	})

	arrowLeft.addEventListener('click', e => {
		e.stopPropagation()
		currentPosition--
		moveSlide()
	})
	arrowRight.addEventListener('click', e => {
		e.stopPropagation()
		currentPosition++
		moveSlide()
	})

	document.addEventListener('keydown', e => {
		if (e.key === 'ArrowRight') {
			currentPosition++
			moveSlide()
		} else if (e.key === 'ArrowLeft') {
			currentPosition--
			moveSlide()
		}
		if (e.key === 'Escape') {
			lightbox.classList.remove(IS_OPEN)
		}
	})
}
