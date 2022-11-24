import { ReactComponent as LogoIcon } from "../assets/logo.svg"

interface LogoProps extends React.SVGProps<SVGSVGElement> {}

export const Logo = (props: LogoProps) => {
  return <LogoIcon {...props} />
}
