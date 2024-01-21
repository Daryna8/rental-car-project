import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../img/logo.png';

export const Header = () => {
  return (
    <StyledHeaderContainer>
      <StyledHomeNav>
        <NavLink to="/">
          <img src={logo} alt="car image" />
          AutoVista
        </NavLink>
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
  height: 72px;
  background: linear-gradient(
    120deg,
    #569eb0 31%,
    #427f8f 61.46%,
    #11809f 90.54%
  );
`;

const StyledHomeNav = styled.div`
  display: flex;
  align-items: center;
  margin-left: 35px;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #d0c5c5;
    font-family: 'Dancing Script';
    font-size: 48px;
    padding-left: 20px;

    img {
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }
  }
`;

const StyledNavigation = styled.div`
  display: flex;
  margin-right: 30px;
  a {
    color: #d0c5c5;
    text-decoration: none;
    font-family: 'Dancing Script';
    font-size: 38px;
    padding: 15px;
  }
`;
