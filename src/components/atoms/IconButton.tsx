import React from "react"

interface IconButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export const IconButton = ({
  children,
  className,
  ...rest
}: IconButtonProps) => {
  return (
    <button className={`icon-button ${className}`} {...rest}>
      {children}
    </button>
  )
}
