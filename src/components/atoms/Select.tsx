import clsx from "clsx"
import React from "react"

interface Item {
  value: string | string[]
  label: string
}

interface SelectProps {
  placeholder?: string
  onChange: (value: string | string[]) => void
  items: Item[]
}

export const Select = ({ placeholder, items, onChange }: SelectProps) => {
  const [isActive, setActive] = React.useState(false)

  const toggleSelect = () => {
    setActive((isActive) => !isActive)
  }

  return (
    <div
      className={clsx(["input", "checkbox-dropdown", isActive && "is-active"])}
      onClick={toggleSelect}
    >
      {placeholder}
      <ul className="checkbox-dropdown-list">
        {items.map((item) => (
          <li key={item.label}>
            <label>
              <span
                onClick={() => onChange(item.value)}
                className={clsx("input-text")}
              >
                {item.label}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}
