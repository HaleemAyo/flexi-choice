import { styled } from "styled-components";

export const StyledPlan = styled.main`
  width: 100%;
  margin-left: 100px;
  margin-top: 56px;

  h1 {
    color: ${({ theme }) => theme.colors.demin};
    font-size: 32px;
    font-weight: 700;
  }
`;
export const PlanSubHeading = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  margin: 0.5rem 0 2rem 0;
`;

export const BigPlanDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SmallPlanDiv = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 5px;
  padding: 0.5rem 3rem 0.5rem 0.5rem;
  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.purple};
  }

  div {
    margin-top: 1.5rem;
  }
  div p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray};
  }
  div p:first-child {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.demin};
    margin-bottom: 0.5rem;
  }
  div p:last-child {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.demin};
    margin-top: 0.5rem;
  }
`;

export const SwitchDiv = styled.div`
  margin: 35px 0 107px 0;
  width: 100%;
  background-color: #f8f9ff;
  border-radius: 5px;
  display: flex;
  justify-content: space-evenly;

  p {
    margin-top: 8px;
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme, activeColor }) => activeColor || theme.colors.gray};
  }
`;
