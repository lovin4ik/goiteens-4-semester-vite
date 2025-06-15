export function initThirdLesson(): void {
	//! imports and exports
	const imagesList = document.getElementById('imagesList')
	const beginBtn = document.getElementById('beginBtn')
	let imagesListElements

	if (!imagesList || !beginBtn) {
		console.warn('Один або кілька елементів не знайдено!')
		return
	}
	//* функція яка робить масив зі зображеннями і повертає його
	const renderImages = (count: number): string => {
		return Array.from({ length: count }, (_, i) => {
			return `
			<li>
				<img
					data-src="https://picsum.photos/400/300?random=${Math.random()}"
					src=""
					alt="image-${i + 1}"
					id="imagesListElement"
					class="w-[400px] h-[300px] bg-white/15 rounded-xl transition-[transform, opacity] duration-300"
				/>
			</li>
		`
		}).join('')
	}

	//* рендеринг зображення і отримуємо елементи
	imagesList!.innerHTML = renderImages(100)
	imagesListElements = document.querySelectorAll('#imagesListElement')

	const observer = new IntersectionObserver(
		(entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
			entries.forEach(entry => {
				const image = entry.target as HTMLImageElement
				if (entry.isIntersecting) {
					// якщо зображення відображається
					image.src = image.dataset.src || ''
					image.style.transform = 'translateY(0)'
					image.style.opacity = '1'
					observer.unobserve(image)
				} else {
					// якщо зображення не відображається
					image.style.transform = 'translateY(100px)'
					image.style.opacity = '0.2'
				}
			})
		},
		{
			threshold: 0.3
		}
	)

	//? функція яка запускає observer
	const startObserver = () => {
		imagesListElements.forEach(image => {
			observer.observe(image)
		})
	}

	//? запуск функції при кліку на кнопку
	beginBtn.addEventListener('click', startObserver)
}
