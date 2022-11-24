import type { PayloadAction } from "@reduxjs/toolkit"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getMovie, getMovies } from "../../api/movies"
import { GetMoviesParams, GetMoviesResult, Movie } from "../../types/movies"

export interface MovieState {
  movies: GetMoviesResult | null
  movieDetails: Movie | null
  selectedMovie: number | null
}

const initialState: MovieState = {
  movies: null,
  movieDetails: null,
  selectedMovie: null,
}

export const fetchMovies = createAsyncThunk<GetMoviesResult, GetMoviesParams>(
  "movies/get",
  async (params, thunkAPI) => {
    const response = await getMovies(params)
    return response
  }
)

export const fetchMovieById = createAsyncThunk<Movie, number>(
  "movies/getById",
  async (id, thunkAPI) => {
    const response = await getMovie(id)
    return response
  }
)

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    select: (state, action: PayloadAction<number>) => {
      state.selectedMovie = action.payload
    },
    reset: (state) => {
      state.selectedMovie = null
      state.movieDetails = null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload
    })
    builder.addCase(fetchMovieById.fulfilled, (state, action) => {
      state.movieDetails = action.payload
    })
  },
})

export const { select, reset } = movieSlice.actions

export default movieSlice.reducer
