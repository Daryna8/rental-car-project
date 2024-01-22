import { SearchBar } from '../components/SearchBar';
import { SearchResults } from '../components/SearchResults';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCarsThunk } from '../redux/operations';
import {
  selectCarBrand,
  selectCars,
  selectCurrentPage,
  selectLastCount,
} from '../redux/selectors';
import { StyledCatalogContainer } from '../styles/styled';
import { clearCarItems, setCurrentPage } from '../redux/rentalSlice';

export const Catalog = () => {
  const cars = useSelector(selectCars);
  const currentPage = useSelector(selectCurrentPage);
  const lastCount = useSelector(selectLastCount);
  const selectedBrand = useSelector(selectCarBrand);

  const dispatch = useDispatch();

  useEffect(() => {
    !selectedBrand && dispatch(fetchCarsThunk({}));
  }, [dispatch, selectedBrand]);

  const handleLoadMore = () => {
    const newPage = currentPage + 1;
    dispatch(setCurrentPage(newPage));
    dispatch(fetchCarsThunk({ page: newPage }));
  };

  const handleSearch = (filter) => {
    dispatch(clearCarItems());
    dispatch(fetchCarsThunk(filter));
  };

  const isLastPage = lastCount < 12;

  return (
    <StyledCatalogContainer>
      <SearchBar cars={cars} handleSearch={handleSearch} />
      <SearchResults
        cars={cars}
        handleLoadMore={handleLoadMore}
        isLastPage={isLastPage}
      />
    </StyledCatalogContainer>
  );
};
