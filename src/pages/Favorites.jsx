import { useSelector } from 'react-redux';
import { selectFavorites } from '../redux/selectors';
import { CarCard } from '../components/CarCard';
import { StyledFavContainer, StyledFavText } from '../styles/styled';

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
          <StyledFavText> Check your favorites: </StyledFavText>
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
