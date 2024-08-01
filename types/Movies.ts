type Pagination = {
  page: number
  total_results: number
  total_pages: number
}

type BaseData = {
  id: number
  title: string
  poster_path: string
}

type Movie = BaseData & {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  original_language: string
  original_title: string
  overview: string
  popularity: number
  release_date: string
  video: boolean
  vote_average: number
  vote_count: number
}

export type MovieData = Pagination & {
  results: Movie[]
}
