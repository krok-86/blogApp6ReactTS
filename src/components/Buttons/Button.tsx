import ButtonStyled from "./ButtonStyled";
import { FC } from "react";

interface IButton {
  name?: string,
  className?: string,
  handleClick?: () => void,
  disabled?: boolean,
  type?: string
}

const Button: FC<IButton> = ({name, handleClick, className}) => {
  return (
    <ButtonStyled
    onClick={handleClick}
    className={className}>
    {name}
    </ButtonStyled>
  )
}
export default Button;