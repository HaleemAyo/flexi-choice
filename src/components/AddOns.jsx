import AsideBar from "./AsideBar";
import Button from "./Button";
import {
  AddOnsContent,
  AddOnsHeading,
  AddOnsSubHeading,
  Content,
  StyledAddOns,
} from "./styles/AddOns.styled";
import { StyledButtonDiv } from "./styles/Button.styled";
import { Conatiner } from "./styles/Container.styled";

function AddOns() {
  return (
    <Conatiner>
      <AsideBar />
      <StyledAddOns>
        <AddOnsHeading>Pick add-ons</AddOnsHeading>
        <AddOnsSubHeading>
          Add-ons help enhance your gaming experience.
        </AddOnsSubHeading>

        <AddOnsContent>
          <input type="checkbox" />
          <Content>
            <p>Online Service</p>
            <p>Access to multiplayer games</p>
          </Content>
          <span>+$1/mo</span>
        </AddOnsContent>
        <AddOnsContent>
          <input type="checkbox" />
          <Content>
            <p>Online Service</p>
            <p>Access to multiplayer games</p>
          </Content>
          <span>+$1/mo</span>
        </AddOnsContent>
        <AddOnsContent>
          <input type="checkbox" />
          <Content>
            <p>Online Service</p>
            <p>Access to multiplayer games</p>
          </Content>
          <span>+$1/mo</span>
        </AddOnsContent>

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
      </StyledAddOns>
    </Conatiner>
  );
}

export default AddOns;
