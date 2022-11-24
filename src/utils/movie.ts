import * as Yup from "yup"
import { Movie, MovieForm } from "../types/movies"

export const getMovieFormData = (movie?: Movie): MovieForm => ({
  id: movie?.id,
  title: movie?.title || "",
  release_date: movie?.release_date || "",
  poster_path: movie?.poster_path || "",
  vote_average: movie?.vote_average || 0,
  genres: movie?.genres || [],
  runtime: movie?.runtime || 0,
  overview: movie?.overview || "",
})

export const convertRunTime = (runtime: number) => {
  const hours = Math.floor(runtime / 60)
  const minutes = runtime % 60
  return `${hours}h ${minutes}min`
}

export const MovieSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  release_date: Yup.date().required("Required"),
  poster_path: Yup.string().url().required("Required"),
  vote_average: Yup.number()
    .min(0, "Must above 0")
    .max(100, "Must below 100")
    .required("Required"),
  genres: Yup.array<String>()
    .min(1, "Must add at least 1 element")
    .required("Required"),
  runtime: Yup.number().min(0, "Must above 0").required("Required"),
  overview: Yup.string().required("Required"),
})
