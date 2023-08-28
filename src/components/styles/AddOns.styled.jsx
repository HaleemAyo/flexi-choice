import { styled } from "styled-components";

export const StyledAddOns = styled.main`
  width: 100%;
  margin-left: 100px;
  margin-top: 56px;
`;
export const AddOnsHeading = styled.h1`
  color: ${({ theme }) => theme.colors.demin};
  font-size: 32px;
  font-weight: 700;
`;

export const AddOnsSubHeading = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  margin: 0.5rem 0 2rem 0;
`;

export const AddOnsContent = styled.div`
  display: flex;
  border: 1px solid #9699aa;
  border-radius: 10px;
  justify-content: space-around;
  transition: all 0.3s ease-in-out;
  margin-bottom: 1rem;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.purple};
  }

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    margin: 30px 0;
  }

  input[type="checkbox"]:checked {
    accent-color: ${({ theme }) => theme.colors.purple};
  }

  span {
    margin: 30px 0;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.purple};
  }
`;

export const Content = styled.div`
  margin: 15px 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.demin};
  }
  p:last-child {
    font-size: 14px;
    color: ${({theme}) => theme.colors.gray};
  }
`;
