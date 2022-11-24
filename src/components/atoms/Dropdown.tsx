import clsx from "clsx"
import React from "react"

interface Item {
  value: string
  label: string
}

interface DropdownProps {
  label?: string
  placeholder?: string
  onChange: (e: React.BaseSyntheticEvent) => void
  items: Item[]
  values: string[]
  errorText?: string
}

export const Dropdown = ({
  label,
  placeholder,
  items,
  values,
  onChange,
  errorText,
}: DropdownProps) => {
  const [isActive, setActive] = React.useState(false)

  const toggleDropdown = () => {
    setActive((isActive) => !isActive)
  }

  return (
    <div className="input-container">
      <span className="input-label input-label-text">{label}</span>
      <div
        className={clsx([
          "input",
          "checkbox-dropdown",
          isActive && "is-active",
        ])}
        onClick={toggleDropdown}
      >
        {placeholder}
        <ul className="checkbox-dropdown-list">
          {items.map((item) => (
            <li key={item.value}>
              <label>
                <input
                  type="checkbox"
                  value={item.value}
                  name={item.label}
                  checked={values.includes(item.value)}
                  onChange={onChange}
                />
                <span className="input-text">{item.label}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
      {errorText && <span className="error">{errorText}</span>}
    </div>
  )
}
