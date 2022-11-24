import clsx from "clsx"
import { ReactComponent as CrossIcon } from "../../assets/cross.svg"

interface ModalProps {
  title?: string
  titleClassName?: string
  modalClassName?: string
  displayModal: boolean
  closeModal: () => void
  children: React.ReactNode
}

export const Modal = (props: ModalProps) => {
  const { title, titleClassName, modalClassName, displayModal, children } =
    props

  const closeModal = (e: React.MouseEvent) => {
    e.stopPropagation()
    props.closeModal()
  }

  return displayModal ? (
    <div className={clsx(["modal", modalClassName])} onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="close" onClick={closeModal}>
          <CrossIcon />
        </div>
        {title && (
          <h3 className={clsx(["title", "heading", titleClassName])}>
            {title}
          </h3>
        )}
        {children}
      </div>
    </div>
  ) : null
}
