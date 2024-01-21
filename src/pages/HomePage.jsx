import {
  StyledHomeContainer,
  StyledMainInfo,
  StyledMainTitle,
  StyledPageContainer,
} from '../styles/styled';

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
