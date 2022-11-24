import { useFormik } from "formik"
import React, { useEffect } from "react"
import { addMovie, updateMovie } from "../api/movies"
import { ReactComponent as CircleCheckIcon } from "../assets/circle-check.svg"
import genres from "../genres.json"
import { MovieForm } from "../types/movies"
import { MovieSchema } from "../utils/movie"
import { ConfirmModal } from "./atoms/ConfirmModal"
import { Dropdown } from "./atoms/Dropdown"
import { Input } from "./atoms/Input"

const defaultForm: MovieForm = {
  title: "",
  release_date: "", // 2022-11-21
  poster_path: "",
  vote_average: 0,
  genres: [],
  runtime: 0,
  overview: "",
}

interface AddUpdateMovieModalProps {
  open: boolean
  closeModal: () => void
  formData?: MovieForm
  isEditMode?: boolean
}

export const AddUpdateMovieModal = ({
  open,
  closeModal,
  formData,
  isEditMode = false,
}: AddUpdateMovieModalProps) => {
  const [successfulModal, setSuccessfulModal] = React.useState(false)

  const submit = async () => {
    formik.validateForm()

    if (formik.isValid) {
      const action = isEditMode
        ? updateMovie(formik.values)
        : addMovie(formik.values)
      const movie = await action
      if (movie) {
        handleClose()
        setSuccessfulModal(true)
      }
    }
  }

  const formik = useFormik({
    initialValues: defaultForm,
    onSubmit: submit,
    validationSchema: MovieSchema,
  })

  const handleClose = () => {
    reset()
    closeModal()
  }

  const reset = () => {
    const form = isEditMode ? formData : defaultForm
    if (form) {
      formik.setValues(form)
    }
  }

  useEffect(() => {
    if (isEditMode && formData) {
      formik.setValues(formData)
    }
  }, [isEditMode, formData])

  const handleDropdownChange = (e: React.BaseSyntheticEvent) => {
    const helpers = formik.getFieldHelpers("genres")
    if (e.target.checked) {
      helpers.setValue(formik.values.genres.concat(e.target.value))
    } else {
      helpers.setValue(
        formik.values.genres.filter((item) => item !== e.target.value)
      )
    }
  }

  return (
    <>
      <ConfirmModal
        open={open}
        closeModal={handleClose}
        title={isEditMode ? "EDIT MOVIE" : "ADD MOVIE"}
        onConfirm={submit}
        confirmText={isEditMode ? "Save" : "submit"}
        rejectText="reset"
        onReject={reset}
        confirmButtonType="submit"
      >
        <div className="add-movie-modal">
          {JSON.stringify(formik.errors)}
          <form className="content" onSubmit={formik.handleSubmit}>
            <Input
              name="title"
              label="title"
              placeholder="Movie Title"
              value={formik.values.title}
              onChange={formik.handleChange}
              errorText={formik.errors.title}
            />
            <Input
              type="date"
              name="release_date"
              label="Release Date"
              placeholder="Select Date"
              value={formik.values.release_date}
              onChange={formik.handleChange}
              errorText={formik.errors.release_date}
            />
            <Input
              name="poster_path"
              label="Movie Url"
              placeholder="https://"
              value={formik.values.poster_path}
              onChange={formik.handleChange}
              errorText={formik.errors.poster_path}
            />
            <Input
              name="vote_average"
              type="number"
              label="Rating"
              placeholder="7.8"
              value={formik.values.vote_average}
              onChange={formik.handleChange}
              errorText={formik.errors.vote_average}
            />
            <Dropdown
              label="Genre"
              placeholder={
                formik.values.genres.length > 0
                  ? formik.values.genres.join(", ")
                  : "Select Genre"
              }
              values={formik.values.genres}
              onChange={handleDropdownChange}
              items={genres.map((genre) => ({
                value: genre,
                label: genre,
              }))}
              errorText={formik.errors.vote_average}
            />
            <Input
              type="number"
              name="runtime"
              label="Runtime"
              placeholder="minutes"
              value={formik.values.runtime}
              onChange={formik.handleChange}
              errorText={formik.errors.runtime}
            />
            <Input
              name="overview"
              label="Overview"
              placeholder="Movie Description"
              multiline
              value={formik.values.overview}
              onChange={formik.handleChange}
              errorText={formik.errors.overview}
            />
          </form>
        </div>
      </ConfirmModal>
      <ConfirmModal
        open={successfulModal}
        closeModal={() => setSuccessfulModal(false)}
        icon={<CircleCheckIcon />}
        title="Congratulations!"
        subtitle="The movie has been added to database successfully"
        containerClassname="successful-modal-container"
        contentClassname="successful-modal-content"
      />
    </>
  )
}
