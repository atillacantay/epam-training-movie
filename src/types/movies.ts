export interface Movie {
  id: number
  budget: number
  genres: string[]
  overview: string
  poster_path: string
  release_date: string
  revenue: number
  runtime: number
  tagline: string
  title: string
  vote_average: number
  vote_count: number
}

export interface GetMoviesParams {
  filter?: string | null
  limit?: number
  offset?: number
  search?: string
  searchBy?: string
  sortBy?: string
  sortOrder?: string
}

export interface GetMoviesResult {
  data: Movie[]
  limit: number
  offset: number
  totalAmount: number
}

export interface AddMovieParams {
  title: string
  tagline?: string
  vote_average: number
  vote_count?: number
  release_date: string
  poster_path: string
  overview: string
  budget?: number
  revenue?: number
  runtime: number
  genres: string[]
}

export interface MovieForm {
  id?: number
  title: string
  release_date: string
  poster_path: string
  vote_average: number
  genres: string[]
  runtime: number
  overview: string
}

export type SortOrder = "asc" | "desc"
