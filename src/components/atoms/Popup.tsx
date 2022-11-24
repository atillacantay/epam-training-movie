import { ReactComponent as CrossIcon } from "../../assets/cross-sm.svg"

export interface MenuItem {
  label: string
  onClick: () => void
}

interface PopupProps {
  open: boolean
  togglePopup: () => void
  options: MenuItem[]
}

export const Popup = ({ open, togglePopup, options }: PopupProps) => {
  const handlePopup = () => {
    togglePopup()
  }

  return open ? (
    <div className="popup" style={{ right: 30, top: 30 }}>
      <div className="close" onClick={handlePopup}>
        <CrossIcon />
      </div>
      <div className="popup-menu menu-item-text">
        {options.map((option) => (
          <div
            key={option.label}
            className="popup-menu-item"
            onClick={option.onClick}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  ) : null
}
