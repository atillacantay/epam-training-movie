interface MovieCardImageProps {
  src: string
  alt: string
}

export const MovieCardImage = ({ src, alt }: MovieCardImageProps) => {
  return <img src={src} alt={alt} width="auto" height="425" />
}
