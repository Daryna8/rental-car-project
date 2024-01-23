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
  const [fromMileage, setFromMileage] = useState('');
  const [toMileage, setToMileage] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    !(selectedBrand || selectedPrice || fromMileage || toMileage) &&
      !cars.length &&
      dispatch(fetchCarsThunk({}));
  }, [selectedBrand, selectedPrice, fromMileage, toMileage, cars, dispatch]);

  const handleLoadMore = () => {
    const newPage = currentPage + 1;
    dispatch(setCurrentPage(newPage));
    dispatch(fetchCarsThunk({ page: newPage }));
  };

  const handleSearch = () => {
    dispatch(clearCarItems());
    if (!!selectedPrice || !!fromMileage || !!toMileage) {
      dispatch(fetchCarsThunk({ pageSize: 100, brand: selectedBrand?.value }));
    } else {
      dispatch(fetchCarsThunk({ brand: selectedBrand?.value }));
    }
  };

  const disableLoadMore =
    lastCount < 12 || selectedPrice || fromMileage || toMileage;

  // this should be done on backend but mockapi does not support range filter
  if (!!selectedPrice) {
    cars = cars.filter(
      (car) => Number(car.rentalPrice.replace('$', '')) <= selectedPrice?.value
    );
  }
  if (!!fromMileage) {
    cars = cars.filter((car) => car.mileage >= fromMileage);
  }
  if (!!toMileage) {
    cars = cars.filter((car) => car.mileage <= toMileage);
  }

  return (
    <StyledCatalogContainer>
      <SearchBar
        cars={cars}
        handleSearch={handleSearch}
        selectedBrand={selectedBrand}
        selectedPrice={selectedPrice}
        fromMileage={fromMileage}
        toMileage={toMileage}
        handleBrandChange={(selectedOption) => setSelectedBrand(selectedOption)}
        handlePriceChange={(selectedOption) => setSelectedPrice(selectedOption)}
        handleFromMileageChange={(e) => setFromMileage(e.target.value)}
        handleToMileageChange={(e) => setToMileage(e.target.value)}
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
