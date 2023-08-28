import {
  AsideInfo,
  AsideNo,
  AsideWrapper,
  StyledAside,
  StyledLink,
} from "./styles/Aside.styled";
const steps = [
  { step: 1, title: "YOUR INFO", path: "/" },
  { step: 2, title: "SELECT PLAN", path: "/plan" },
  { step: 3, title: "ADD-ONS", path: "/add-ons" },
  { step: 4, title: "SUMMARY", path: "/summary" },
];

function AsideBar() {
  return (
    <StyledAside>
      {steps.map((step) => (
        <StyledLink key={step.step} to={step.path}>
          <AsideWrapper>
            <AsideNo>
              <p>{step.step}</p>
            </AsideNo>
            <AsideInfo>
              <span>STEP {step.step}</span>
              <p>{step.title}</p>
            </AsideInfo>
          </AsideWrapper>
        </StyledLink>
      ))}
    </StyledAside>
  );
}

export default AsideBar;
