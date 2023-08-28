import AsideBar from "./AsideBar";
import Button from "./Button";
import { PiToggleLeftFill } from "react-icons/pi";
import proLogo from "/public/assets/proLogo.svg";
import { StyledButtonDiv } from "./styles/Button.styled";
import { Conatiner } from "./styles/Container.styled";
import {
  BigPlanDiv,
  PlanSubHeading,
  SmallPlanDiv,
  StyledPlan,
  SwitchDiv,
} from "./styles/Plan.styled";

const Plan = () => {
  return (
    <Conatiner>
      <AsideBar />

      <StyledPlan>
        <h1>Select your plan</h1>
        <PlanSubHeading>
          You have the option of monthly or yearly billing.
        </PlanSubHeading>

        <BigPlanDiv>
          <SmallPlanDiv>
            <img src={proLogo} alt="" />
            <div>
              <p>Arcade</p>
              <p>$90/yr</p>
              <p>2 months free</p>
            </div>
          </SmallPlanDiv>
        </BigPlanDiv>

        <SwitchDiv>
          <p>Monthly</p>
          <PiToggleLeftFill size={38} />
          <p>Yearly</p>
        </SwitchDiv>

        <StyledButtonDiv>
          <Button
            bg="#fff"
            color="#9699AA"
            bgColorHover="#022959"
            bgHover="#fff"
          >
            Go Back
          </Button>
          <Button>Next Step</Button>
        </StyledButtonDiv>
      </StyledPlan>
    </Conatiner>
  );
};

export default Plan;
