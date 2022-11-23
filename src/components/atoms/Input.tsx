import clsx from "clsx"

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string
  multiline?: boolean
}

export const Input = ({ label, multiline, ...props }: InputProps) => {
  return (
    <div className="input-container">
      <span className="input-label input-label-text">{label}</span>
      <input
        className={clsx(["input", "input-text", multiline && "multiline"])}
        {...props}
      />
    </div>
  )
}
