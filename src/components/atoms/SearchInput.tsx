interface SearchInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const SearchInput = (props: SearchInputProps) => {
  return <input className="input search-input input-text" {...props} />
}
