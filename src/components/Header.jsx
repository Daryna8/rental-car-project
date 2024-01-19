import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = () => {
  return (
    <StyledHeaderContainer>
      <StyledHomeNav>
        <div> Logo</div>
        <NavLink to="/">AutoVista</NavLink>
      </StyledHomeNav>

      <StyledNavigation>
        <NavLink to="catalog">Catalog</NavLink>
        <NavLink to="favorites">Favorites</NavLink>
      </StyledNavigation>
    </StyledHeaderContainer>
  );
};

const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 68px;
  background-color: #0b44cd;
`;

const StyledHomeNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  margin-left: 35px;
  a {
    color: #d0c5c5;
    text-decoration: none;
  }
`;

const StyledNavigation = styled.div`
  display: flex;
  margin-top: 20px;
  margin-right: 30px;
  a {
    color: #d0c5c5;
    text-decoration: none;
    padding: 5px;
  }
`;
