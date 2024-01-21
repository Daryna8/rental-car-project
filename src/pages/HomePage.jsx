import { styled } from 'styled-components';
import autovistaImage from '../img/homepage.jpg';

export const HomePage = () => {
  return (
    <StyledPageContainer>
      <StyledHomeContainer>
        <StyledMainTitle>Welcome to AutoVista</StyledMainTitle>
        <StyledMainInfo>
          Your Ultimate Car Rental Companion in Ukraine! Whether you are a local
          or global traveler, AutoVista redefines your journey with seamless
          functionality and unparalleled ease.
        </StyledMainInfo>
      </StyledHomeContainer>
    </StyledPageContainer>
  );
};

export const StyledPageContainer = styled.div`
  background-image: url(${autovistaImage});
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: -72px;
`;

const StyledHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

const StyledMainTitle = styled.h1`
  max-width: 1000px;
  margin: 0 auto;
  color: #1256aa;
  font-family: 'Dancing Script';
  font-size: 98px;
  font-weight: 400;
  line-height: 1.5;

  @media only screen and (min-width: 480px) and (max-width: 1399px) {
    font-size: 48px;
    margin-top: 40px;
  }
`;

const StyledMainInfo = styled.p`
  margin: 0 240px;
  font-size: 32px;
  font-weight: 400;
  line-height: 1.5;
  @media only screen and (min-width: 480px) and (max-width: 1399px) {
    font-size: 18px;
    margin: 20px 160px;
  }
`;
