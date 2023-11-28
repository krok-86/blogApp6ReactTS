import ButtonStyled from "./ButtonStyled";

const Button = ({name, handleClick, className}) => {
  return (
    <ButtonStyled
    onClick={handleClick}
    className={className}>
    {name}
    </ButtonStyled>
  )
}
export default Button;