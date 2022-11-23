import {
  AddMovieParams,
  GetMoviesParams,
  GetMoviesResult,
  Movie,
} from "../types/movies"
import { moviesApi } from "./axiosInstance"

export const getMovies = async (params?: GetMoviesParams) => {
  try {
    const response = await moviesApi.get<GetMoviesResult>("/movies", { params })
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getMovie = async (id: string) => {
  try {
    const response = await moviesApi.get<Movie>(`/movies${id}`)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const addMovie = async (body: AddMovieParams) => {
  try {
    const response = await moviesApi.post<Movie>("/movies", body)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const updateMovie = async (body: AddMovieParams) => {
  try {
    const response = await moviesApi.put<Movie>("/movies", body)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const deleteMovie = async (id: number) => {
  try {
    const response = await moviesApi.delete(`/movies/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
