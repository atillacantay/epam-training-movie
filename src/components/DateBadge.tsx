interface DateBadgeProps {
  text: string
}

export const DateBadge = ({ text }: DateBadgeProps) => {
  return (
    <div className="badge text-xs">
      <span>{text}</span>
    </div>
  )
}
