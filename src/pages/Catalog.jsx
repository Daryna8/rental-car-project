import { styled } from 'styled-components';
import { SearchBar } from '../components/SearchBar';
import { SearchResults } from '../components/SearchResults';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCarsThunk } from '../redux/operations';
import { selectCars } from '../redux/selectors';

export const Catalog = () => {
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCarsThunk());
  }, [dispatch]);

  return (
    <StyledCatalogContainer>
      <SearchBar />
      <SearchResults cars={cars} />
    </StyledCatalogContainer>
  );
};

const StyledCatalogContainer = styled.div`
  margin: 50px 115px;
`;
