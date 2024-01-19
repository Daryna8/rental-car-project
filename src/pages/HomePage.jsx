import { styled } from 'styled-components';
import autovistaImage from '../img/car.webp';

export const HomePage = () => {
  return (
    <StyledHomeContainer>
      <Image src={autovistaImage} alt="car image" />
      <div>
        AutoVista is a convenient and user-friendly application designed for a
        company specializing in providing car rental services in Ukraine.
      </div>
    </StyledHomeContainer>
  );
};

const StyledHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
