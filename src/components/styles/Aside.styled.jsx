import { styled } from "styled-components";
import sideBarDesktop from "/public/assets/asideBarDesktop.svg";
import { NavLink } from "react-router-dom";

export const StyledAside = styled.aside`
  background-image: url(${sideBarDesktop});
  background-size: cover;
  background-repeat: no-repeat;
  width: 17.1rem;
  height: 568px;
  flex-shrink: 0;
`;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  pointer-events: none;
`;
export const AsideWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  padding-top: 45px;
  padding-left: 41px;
`;

export const AsideNo = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 100px;
  text-align: center;
  transition: all 0.3s ease-in-out;

  p {
    font-size: 14px;
    margin-top: 7px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
    transition: all 0.3s ease-in-out;
  }

  ${StyledLink}.active & {
    background-color: #bee2fd;
    border: none;

    p {
      color: ${({ theme }) => theme.colors.demin};
    }
  }
`;

export const AsideInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  span {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.gray};
  }

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 700;
  }
`;
