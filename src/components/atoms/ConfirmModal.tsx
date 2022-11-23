import clsx from "clsx"
import { Modal } from "./Modal"
import { PrimaryButton } from "./PrimaryButton"
import { SecondaryButton } from "./SecondaryButton"

interface ConfirmModalProps {
  open: boolean
  children?: React.ReactNode
  closeModal: () => void
  icon?: React.ReactNode
  title?: string
  subtitle?: string
  onReject?: () => void
  rejectText?: string
  onConfirm?: () => void
  confirmText?: string
  errorText?: string
  containerClassname?: string
  contentClassname?: string
}

export const ConfirmModal = ({
  open,
  children,
  closeModal,
  icon,
  title,
  subtitle,
  onReject,
  rejectText,
  onConfirm,
  confirmText,
  errorText,
  containerClassname,
  contentClassname,
}: ConfirmModalProps) => {
  return (
    <Modal
      displayModal={open}
      closeModal={closeModal}
      modalClassName={clsx(["confirm-modal-container", containerClassname])}
    >
      <div className={clsx(["confirm-modal-content", contentClassname])}>
        {icon ? icon : null}
        <h3 className="heading" style={{ textTransform: "uppercase" }}>
          {title}
        </h3>
        <span className="input-text">{subtitle}</span>
        {children}
        {errorText && <span className="error">Error: {errorText}</span>}
        <div className="action-buttons">
          {onReject && (
            <SecondaryButton onClick={onReject}>{rejectText}</SecondaryButton>
          )}
          {onConfirm && (
            <PrimaryButton onClick={onConfirm}>
              {confirmText || "Confirm"}
            </PrimaryButton>
          )}
        </div>
      </div>
    </Modal>
  )
}
