import { styled } from "styled-components";

export const StyledSummary = styled.main`
  width: 100%;
  margin-top: 56px;
  margin-left: 100px;

  h1 {
    font-size: 32px;
    color: ${({ theme }) => theme.colors.demin};
  }

  p {
    margin: 0.5rem 0 2rem 0;
    color: ${({ theme }) => theme.colors.demin};
  }
`;

export const Arcade = styled.div`
  background-color: #f8f9ff;
  padding: 1rem;
  border-radius: 5px;

  p {
    margin-bottom: 0.5rem;
    display: inline-block;
  }
  hr {
    background-color: #9699aa;
    opacity: 20%;
    height: 1px;
    margin: 0.5rem 0;
  }
`;

export const SummaryPlan = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  p {
    display: inline;
    color: ${({ theme }) => theme.colors.gray};
  }

  span {
    color: ${({ theme }) => theme.colors.demin};
    font-weight: 700;
  }
`;
export const SummaryPlans = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    display: inline-block;
    color: ${({ theme }) => theme.colors.gray};
    font-size: 14px;
  }
  p:last-child {
    color: ${({ theme }) => theme.colors.demin};
  }
`;
export const TotalDiv = styled.div`
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  margin: 1rem 0 100px 0;

  p {
    display: inline-block;
    color: ${({ theme }) => theme.colors.gray};
    font-size: 14px;
  }
  p:last-child {
    color: ${({ theme }) => theme.colors.purple};
    font-size: 20px;
    font-weight: 700;
  }
`;
