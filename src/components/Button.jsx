/* eslint-disable react/no-unknown-property */

import { StyledButton } from "./styles/Button.styled";

/* eslint-disable react/prop-types */
const Button = ({ onClick, children, bg, color, bgHover,bgColorHover}) => {
  return <StyledButton bg={bg} color={color} bgHover={bgHover} bgColorHover={bgColorHover} onClick={onClick} >{children}</StyledButton>;
};

export default Button;
