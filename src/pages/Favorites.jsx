import { useSelector } from 'react-redux';
import { selectFavorites } from '../redux/selectors';
import { CarCard } from '../components/CarCard';
import {
  StyledFavContainer,
  StyledFavText,
  StyledFavTitle,
} from '../styles/styled';

export const Favorites = () => {
  const fav = useSelector(selectFavorites);

  return (
    <div>
      {fav.length === 0 ? (
        <StyledFavText>
          No favorites yet. Explore our catalog to add some!
        </StyledFavText>
      ) : (
        <StyledFavContainer>
          <StyledFavTitle>
            {' '}
            Top Picks: Your Preferred Rides with AutoVista{' '}
          </StyledFavTitle>
          <ul>
            {fav.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </ul>
        </StyledFavContainer>
      )}
    </div>
  );
};
