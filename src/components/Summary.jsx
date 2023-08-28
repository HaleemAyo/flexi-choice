import AsideBar from "./AsideBar";
import Button from "./Button";
import { StyledButtonDiv } from "./styles/Button.styled";
import { Conatiner } from "./styles/Container.styled";
import {
  Arcade,
  StyledSummary,
  SummaryPlan,
  SummaryPlans,
  TotalDiv,
} from "./styles/Summary.styled";

const Summary = () => {
  return (
    <Conatiner>
      <AsideBar />

      <StyledSummary>
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>

        <Arcade>
          <p>Arcade (Monthly)</p>
          <SummaryPlan>
            <div>
              <p>Change</p>
            </div>
            <span>$9/mo</span>
          </SummaryPlan>
          <hr />
          <SummaryPlans>
            <p>Online Service</p>
            <p>+$1/mo</p>
          </SummaryPlans>
          <SummaryPlans>
            <p>Larger Storage</p>
            <p>+$1/mo</p>
          </SummaryPlans>
        </Arcade>

        <TotalDiv>
          <p>Total (per month)</p>
          <p>+$12/mo</p>
        </TotalDiv>

        <StyledButtonDiv>
          <Button bg="#fff" color="#9699AA" bgColorHover="#022959" bgHover="#fff">Go Back</Button>
          <Button bg="#483EFF" bgHover="#928CFF">Confirm</Button>
        </StyledButtonDiv>
      </StyledSummary>
    </Conatiner>
  );
};

export default Summary;
