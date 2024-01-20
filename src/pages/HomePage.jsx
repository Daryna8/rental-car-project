import { styled } from 'styled-components';
import autovistaImage from '../img/car.webp';

export const HomePage = () => {
  return (
    <StyledHomeContainer>
      <StyledMainTitle>
        <span>Welcome to AutoVista</span> – Your Ultimate Car Rental Companion
        in Ukraine! Whether you are a local or global traveler, AutoVista
        redefines your journey with seamless functionality and unparalleled
        ease.
      </StyledMainTitle>
      <Image src={autovistaImage} alt="car image" />
    </StyledHomeContainer>
  );
};

const StyledHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px;
`;

const StyledMainTitle = styled.h1`
  max-width: 800px;
  margin: 0 auto;
  color: #121417;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.5;
  span {
    color: blue;
    font-size: 32px;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: 1000px;
`;
