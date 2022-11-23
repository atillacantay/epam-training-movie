import clsx from "clsx"
import React from "react"

interface SecondaryButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export const SecondaryButton = ({
  children,
  className,
  ...rest
}: SecondaryButtonProps) => {
  return (
    <button
      className={clsx(["button", "secondary", "button-text", className])}
      {...rest}
    >
      {children}
    </button>
  )
}
