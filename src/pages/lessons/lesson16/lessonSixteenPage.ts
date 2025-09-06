import { useFetchMoviePage } from './hooks/useFetchMoviePage'
import type { IResult } from './tmbdMoviesGet.interface'

export async function lessonSixteenPage() {
	let currentPage = 1

	const container = document.createElement('div')

	const movieData = await useFetchMoviePage()

	let moviesPage: IResult[] = movieData.results

	container.innerHTML = `
		<ul id="renderMoviesList" class="flex flex-wrap gap-4 justify-center"></ul>

			<form class="flex mt-4 items-center justify-center gap-2" id="paginationControls">
				<button type="button" id="prevPage" class="rounded-full px-3 py-1"><</button>

				<input id="currentPage" class="self-center no-spinner outline-none w-auto min-w-[2ch] max-w-[6ch] transition-shadow duration-300 hover:shadow-ios focus:shadow-ios text-center rounded" value="${currentPage}" type="number" min="1" max="${movieData.total_pages}" />

				<button type="button" id="nextPage" class="rounded-full px-3 py-1">></button>
			</form>

		<p class="mt-2 text-center block mb-1">Total pages: ${movieData.total_pages}</p>
	`

	function renderMovieList() {
		container.querySelector('#renderMoviesList')!.innerHTML = `
			${moviesPage
				.map(movie => {
					return `
						<li class="shadow-ios overflow-hidden mb-4 rounded-lg backdrop-blur-2xl bg-bg/5 w-[300px]">
							<img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" alt="" loading="lazy" class="w-[300px] h-[450px] bg-white/10"/>
							<div class="p-4">
								<h2 class="text-xl font-semibold">Title: ${movie.title}</h2>
								<p>Release Date: ${movie.release_date}</p>
								<p>Popularity: ${movie.popularity}</p>
							</div>
						</li>
					`
				})
				.join('')}
		`
	}

	function renderPageNumber() {
		container.querySelector<HTMLInputElement>('#currentPage')!.value =
			`${currentPage}`
	}

	async function goToPage(page: number) {
		if (page < 1) page = 1
		if (page > movieData.total_pages) page = movieData.total_pages

		currentPage = page
		const newData = await useFetchMoviePage(currentPage)
		moviesPage = newData.results
		renderMovieList()
		renderPageNumber()
	}

	const prevBtn = container.querySelector<HTMLButtonElement>('#prevPage')!
	const nextBtn = container.querySelector<HTMLButtonElement>('#nextPage')!

	prevBtn.addEventListener('click', async () => {
		if (currentPage > 1) await goToPage(currentPage - 1)
	})

	nextBtn.addEventListener('click', async () => {
		if (currentPage < movieData.total_pages) await goToPage(currentPage + 1)
	})

	const form = container.querySelector<HTMLFormElement>('#paginationControls')!
	form.addEventListener('submit', async e => {
		e.preventDefault() // щоб сторінка не перезавантажувалась
		const input = container.querySelector<HTMLInputElement>('#currentPage')!
		const page = parseInt(input.value)
		if (!isNaN(page)) {
			await goToPage(page)
		}
	})

	renderMovieList()
	renderPageNumber()

	return container
}
