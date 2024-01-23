import { SearchBar } from '../components/SearchBar';
import { SearchResults } from '../components/SearchResults';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchCarsThunk } from '../redux/operations';
import {
  selectCars,
  selectCurrentPage,
  selectLastCount,
  selectLoading,
} from '../redux/selectors';
import { StyledCatalogContainer } from '../styles/styled';
import { clearCarItems, setCurrentPage } from '../redux/rentalSlice';

export const Catalog = () => {
  let cars = useSelector(selectCars);
  const currentPage = useSelector(selectCurrentPage);
  const lastCount = useSelector(selectLastCount);
  const loading = useSelector(selectLoading);

  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    !(selectedBrand || selectedPrice) &&
      !cars.length &&
      dispatch(fetchCarsThunk({}));
  }, [selectedBrand, selectedPrice, cars, dispatch]);

  const handleLoadMore = () => {
    const newPage = currentPage + 1;
    dispatch(setCurrentPage(newPage));
    dispatch(fetchCarsThunk({ page: newPage }));
  };

  const handleBrandChange = (selectedOption) => {
    setSelectedBrand(selectedOption);
  };

  const handlePriceChange = (selectedOption) => {
    setSelectedPrice(selectedOption);
  };

  const handleSearch = () => {
    dispatch(clearCarItems());
    if (selectedPrice !== null) {
      dispatch(fetchCarsThunk({ pageSize: 100, brand: selectedBrand?.value }));
    } else {
      dispatch(fetchCarsThunk({ brand: selectedBrand?.value }));
    }
  };

  const disableLoadMore = lastCount < 12 || selectedPrice;

  // this should be done on backend but mockapi does not support range filter
  if (selectedPrice !== null) {
    cars = cars.filter((car) => {
      const carPrice = Number(car.rentalPrice.replace('$', ''));
      return carPrice <= selectedPrice?.value;
    });
  }

  return (
    <StyledCatalogContainer>
      <SearchBar
        cars={cars}
        handleSearch={handleSearch}
        handleBrandChange={handleBrandChange}
        selectedBrand={selectedBrand}
        handlePriceChange={handlePriceChange}
        selectedPrice={selectedPrice}
      />
      <SearchResults
        cars={cars}
        handleLoadMore={handleLoadMore}
        disableLoadMore={disableLoadMore}
        loading={loading}
      />
    </StyledCatalogContainer>
  );
};
