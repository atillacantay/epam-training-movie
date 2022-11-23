import { AxiosError } from "axios"
import { useCallback, useMemo, useState } from "react"
import { deleteMovie } from "../api/movies"
import { ReactComponent as VerticalDotsIcon } from "../assets/vertical-dots.svg"
import { Movie } from "../types/movies"
import { AddUpdateMovieModal } from "./AddUpdateMovieModal"
import { ConfirmModal } from "./atoms/ConfirmModal"
import { IconButton } from "./atoms/IconButton"
import { MenuItem, Popup } from "./atoms/Popup"

interface MovieCardProps {
  movie: Movie
}

export const MovieCardActions = ({ movie }: MovieCardProps) => {
  const [contextMenu, setContextMenu] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const [deleteError, setDeleteError] = useState("")

  const toggleContextMenu = () => {
    setContextMenu((contextMenu) => !contextMenu)
  }

  const openDeleteModal = useCallback(() => {
    toggleContextMenu()
    setDeleteModal(true)
  }, [])
  const closeDeleteModal = () => {
    setDeleteError("")
    setDeleteModal(false)
  }
  const handleMovieDelete = async () => {
    try {
      setDeleteError("")
      await deleteMovie(movie.id)
      closeDeleteModal()
    } catch (error) {
      setDeleteError((error as AxiosError)?.response?.data as string)
    }
  }

  const openEditModal = useCallback(() => {
    toggleContextMenu()
    setEditModal(true)
  }, [])

  const closeEditModal = () => {
    setEditModal(false)
  }

  const options = useMemo<MenuItem[]>(
    () => [
      {
        label: "Edit",
        onClick: () => openEditModal(),
      },
      {
        label: "Delete",
        onClick: () => openDeleteModal(),
      },
    ],
    [openDeleteModal, openEditModal]
  )

  return (
    <>
      <IconButton className="menu" onClick={toggleContextMenu}>
        <VerticalDotsIcon />
      </IconButton>
      <Popup
        open={contextMenu}
        togglePopup={toggleContextMenu}
        options={options}
      />
      <ConfirmModal
        open={deleteModal}
        closeModal={closeDeleteModal}
        onConfirm={handleMovieDelete}
        title="Delete Movie"
        subtitle="Are you sure you want to delete this movie?"
        errorText={deleteError}
        containerClassname="delete-modal-container"
      />
      <AddUpdateMovieModal
        open={editModal}
        closeModal={closeEditModal}
        formData={movie}
        isEditMode={true}
      />
    </>
  )
}
