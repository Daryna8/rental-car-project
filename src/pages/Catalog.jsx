import { SearchBar } from '../components/SearchBar';
import { SearchResults } from '../components/SearchResults';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchCarsThunk } from '../redux/operations';
import { selectCars, selectLastCount } from '../redux/selectors';
import { StyledCatalogContainer } from '../styles/styled';

export const Catalog = () => {
  const [, setCurrentPage] = useState(1);
  const cars = useSelector(selectCars);
  const lastCount = useSelector(selectLastCount);
  const dispatch = useDispatch();
  useEffect(() => {
    !cars.length && dispatch(fetchCarsThunk({}));
  }, [dispatch, cars]);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => {
      const nextPage = prevPage + 1;
      dispatch(fetchCarsThunk({ page: nextPage }));
      return nextPage;
    });
  };

  const isLastPage = lastCount < 12;

  return (
    <StyledCatalogContainer>
      <SearchBar cars={cars} />
      <SearchResults
        cars={cars}
        handleLoadMore={handleLoadMore}
        isLastPage={isLastPage}
      />
    </StyledCatalogContainer>
  );
};
