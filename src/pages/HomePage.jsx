import {
  StyledHomeContainer,
  StyledMainInfo,
  StyledPageContainer,
} from '../styles/styled';

export const HomePage = () => {
  return (
    <StyledPageContainer>
      <StyledHomeContainer>
        <StyledMainInfo>
          Discover the freedom of the road with <span>AutoVista</span>, <br />
          your trusted partner in car rental adventures in Ukraine.
        </StyledMainInfo>
      </StyledHomeContainer>
    </StyledPageContainer>
  );
};
