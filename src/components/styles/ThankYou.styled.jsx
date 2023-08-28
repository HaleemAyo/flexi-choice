import { styled } from "styled-components";

export const StyledThankYou = styled.main`
  width: 100%;
  text-align: center;
  padding: 100px 0 0 0;

  h1 {
    color: ${({ theme }) => theme.colors.demin};
    font-size: 32px;
    margin: 32px 0 14px 0;
  }

  p {
    padding: 0 5rem;
    color: ${({ theme }) => theme.colors.gray};
  }
  p span {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.demin};
    text-decoration: underline;
  }
`;
