import React, { useEffect } from "react"
import { addMovie, updateMovie } from "../api/movies"
import { ReactComponent as CircleCheckIcon } from "../assets/circle-check.svg"
import genres from "../genres.json"
import { MovieForm } from "../types/movies"
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
  const [form, setForm] = React.useState<MovieForm>(defaultForm)

  const submit = async () => {
    const action = isEditMode ? updateMovie(form) : addMovie(form)
    const movie = await action
    if (movie) {
      handleClose()
      setSuccessfulModal(true)
    }
  }

  const handleClose = () => {
    reset()
    closeModal()
  }

  const reset = () => {
    const form = isEditMode ? formData : defaultForm
    if (form) {
      setForm(form)
    }
  }

  const handleInputChange = (name: string, value: string | number) => {
    setForm({ ...form, [name]: value })
  }

  useEffect(() => {
    if (isEditMode && formData) {
      setForm(formData)
    }
  }, [isEditMode, formData])

  const handleDropdownChange = (
    name: keyof MovieForm,
    e: React.BaseSyntheticEvent
  ) => {
    if (e.target.checked) {
      setForm({ ...form, [name]: (form[name] as any[]).concat(e.target.value) })
    } else {
      setForm({
        ...form,
        [name]: (form[name] as any[]).filter((item) => item !== e.target.value),
      })
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
      >
        <div className="add-movie-modal">
          <form className="content">
            <Input
              name="title"
              label="title"
              value={form.title}
              placeholder="Movie Title"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <Input
              type="date"
              name="release_date"
              label="Release Date"
              value={form.release_date}
              placeholder="Select Date"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <Input
              name="poster_path"
              label="Movie Url"
              value={form.poster_path}
              placeholder="https://"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <Input
              name="vote_average"
              type="number"
              label="Rating"
              value={form.vote_average}
              placeholder="7.8"
              onChange={(e) =>
                handleInputChange(e.target.name, e.target.valueAsNumber)
              }
            />
            <Dropdown
              label="Genre"
              placeholder={
                form.genres.length > 0 ? form.genres.join(", ") : "Select Genre"
              }
              onChange={(e) => handleDropdownChange("genres", e)}
              values={form.genres}
              items={genres.map((genre) => ({
                value: genre,
                label: genre,
              }))}
            />
            <Input
              type="number"
              name="runtime"
              label="Runtime"
              value={form.runtime}
              placeholder="minutes"
              onChange={(e) =>
                handleInputChange(e.target.name, e.target.valueAsNumber)
              }
            />
            <Input
              name="overview"
              label="Overview"
              value={form.overview}
              placeholder="Movie Description"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              multiline
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
