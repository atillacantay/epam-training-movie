import clsx from "clsx"
import React from "react"

interface TertiaryButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export const TertiaryButton = ({
  children,
  className,
  ...rest
}: TertiaryButtonProps) => {
  return (
    <button
      {...rest}
      className={clsx(["button", "tertiary", "button-text-bold", className])}
    >
      {children}
    </button>
  )
}
