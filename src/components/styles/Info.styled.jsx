import { styled } from "styled-components";

export const InfoWrapper = styled.main`
  margin-top: 56px;
  width: 100%;
  margin-left: 100px;

  h1 {
    font-size: 52px;
    color: ${({ theme }) => theme.colors.demin};
  }
  p {
    margin-bottom: 35px;
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 5px;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.demin};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.purple};
    outline: none;
  }
`;

export const InfoWordings = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  label {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.demin};
  }

  span {
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.red};
  }
`;
