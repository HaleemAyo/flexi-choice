import thankYou from "/public/assets/thankYou.svg";
import { Conatiner } from "./styles/Container.styled";
import AsideBar from "./AsideBar";
import { StyledThankYou } from "./styles/ThankYou.styled";

function ThankYou() {
  return (
    <Conatiner>
      <AsideBar />
      <StyledThankYou>
        <div>
          <img src={thankYou} alt="thankYou-svg" />
        </div>
        <h1>Thank you!</h1>
        <p>
          Thanks for confirming your subscription. I hope you have fun checking
          my project out.If you ever need to build a website, please feel free
          to email me at <span>dahunsihaleem@yahoo.com</span>.
        </p>
      </StyledThankYou>
    </Conatiner>
  );
}

export default ThankYou;
