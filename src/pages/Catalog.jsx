import { SearchBar } from '../components/SearchBar';
import { SearchResults } from '../components/SearchResults';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchCarsThunk } from '../redux/operations';
import {
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
  const [selectedBrand, setSelectedBrand] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarsThunk({}));
  }, [dispatch]);

  const handleLoadMore = () => {
    const newPage = currentPage + 1;
    dispatch(setCurrentPage(newPage));
    dispatch(fetchCarsThunk({ page: newPage }));
  };

  const handleBrandChange = (selectedOption) => {
    setSelectedBrand(selectedOption);
  };

  const handleSearch = () => {
    dispatch(clearCarItems());
    dispatch(fetchCarsThunk({ brand: selectedBrand?.value }));
  };

  const isLastPage = lastCount < 12;

  return (
    <StyledCatalogContainer>
      <SearchBar
        cars={cars}
        handleSearch={handleSearch}
        handleBrandChange={handleBrandChange}
        selectedBrand={selectedBrand}
      />
      <SearchResults
        cars={cars}
        handleLoadMore={handleLoadMore}
        isLastPage={isLastPage}
      />
    </StyledCatalogContainer>
  );
};
