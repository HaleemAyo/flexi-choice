/* eslint-disable no-undef */
import { styled } from "styled-components";

export const StyledButtonDiv = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  max-width: 500px;
`;
export const StyledButton = styled.button`
  background-color: ${({ bg, theme }) => bg || theme.colors.demin};
  color: ${({ color, theme }) => color || theme.colors.white};
  font-weight: 500;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ bgHover}) => bgHover || "#164A8A"};
    color: ${({ bgColorHover}) => bgColorHover || ""};
  }
`;
