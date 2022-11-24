import clsx from "clsx"

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string
  multiline?: boolean
  errorText?: string
}

export const Input = ({
  label,
  multiline,
  errorText,
  ...props
}: InputProps) => {
  return (
    <div className="input-container">
      <span className="input-label input-label-text">{label}</span>
      <input
        className={clsx(["input", "input-text", multiline && "multiline"])}
        {...props}
      />
      {errorText && <span className="error">{errorText}</span>}
    </div>
  )
}
