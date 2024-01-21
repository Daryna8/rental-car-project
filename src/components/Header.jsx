import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png';
import {
  StyledHeaderContainer,
  StyledHomeNav,
  StyledNavigation,
} from '../styles/styled';

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
