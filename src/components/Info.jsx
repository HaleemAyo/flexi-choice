import AsideBar from "./AsideBar";
import Button from "./Button";
import { StyledButtonDiv } from "./styles/Button.styled";
import { Conatiner } from "./styles/Container.styled";
import { InfoWordings, InfoWrapper, Input } from "./styles/Info.styled";

const Info = () => {
  return (
    <Conatiner>
      <AsideBar />

      <InfoWrapper>
        <h1>Personal info</h1>
        <p>Please provide your first name, last name and email address.</p>

        <form>
          <div>
            <InfoWordings>
              <label>First Name</label>
              {/* <span>This field is required</span> */}
            </InfoWordings>
            <Input type="text" placeholder="e.g. John" />
          </div>

          <div>
            <InfoWordings>
              <label>Last Name</label>
              {/* <span>This field is required</span> */}
            </InfoWordings>
            <Input type="text" placeholder="e.g. Doe" />
          </div>

          <div>
            <InfoWordings>
              <label>Email</label>
              {/* <span>This field is required</span> */}
            </InfoWordings>
            <Input type="email" placeholder="e.g. johndoe@lorem.com" />
          </div>
          <StyledButtonDiv>
          <p></p>
            <Button>Next Step</Button>
          </StyledButtonDiv>
        </form>
      </InfoWrapper>
    </Conatiner>
  );
};

export default Info;
