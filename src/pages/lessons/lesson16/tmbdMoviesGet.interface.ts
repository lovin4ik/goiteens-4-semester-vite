export interface ITmbdMoviesGet {
	page: number
	results: IResult[]
	total_pages: number
	total_results: number
}

export interface IResult {
	adult: boolean
	backdrop_path: string
	genre_ids: number[]
	id: number
	original_language: string
	original_title: string
	overview: string
	popularity: number
	release_date: string
	poster_path: string
	title: string
	video: boolean
	vote_average: number
	vote_count: number
}
