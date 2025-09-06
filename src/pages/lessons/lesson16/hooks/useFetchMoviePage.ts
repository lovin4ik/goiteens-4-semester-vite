import type { ITmbdMoviesGet } from '../tmbdMoviesGet.interface'

const urlMovie =
	'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc'

const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YThmZGE0ZTVmMmVhZjQwYzlhYmFjYzYyOWNiOGQ4OSIsIm5iZiI6MTc1NjMxMzk5Ny42NjksInN1YiI6IjY4YWYzOThkYWFkNjQzMjI5NjYyNGFkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V5HL5cSw9ulAJMiHZUWw04mzAJ4TY-3Tx3LDPnlKFHY'
	}
}

export const useFetchMoviePage = async (
	page?: number
): Promise<ITmbdMoviesGet> => {
	if (!page) page = 1
	if (page < 1) page = 1

	const response = await fetch(`${urlMovie}&page=${page}`, options)

	return response.json()
}
