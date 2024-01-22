import { useSelector } from 'react-redux';
import { selectFavorites } from '../redux/selectors';
import { CarCard } from '../components/CarCard';

export const Favorites = () => {
  const fav = useSelector(selectFavorites);

  return (
    <div>
      {fav.length === 0 ? (
        <p>No favorites yet. Explore our catalog to add some!</p>
      ) : (
        <div>
          <h2> Check you favorites</h2>
          <ul>
            {fav.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
