import clsx from "clsx"
import React from "react"

interface PrimaryButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export const PrimaryButton = ({
  children,
  className,
  ...rest
}: PrimaryButtonProps) => {
  return (
    <button
      className={clsx(["button", "primary", "button-text", className])}
      {...rest}
    >
      {children}
    </button>
  )
}
