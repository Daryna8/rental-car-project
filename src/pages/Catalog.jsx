import { styled } from 'styled-components';
import { SearchBar } from '../components/SearchBar';
import { SearchResults } from '../components/SearchResults';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchCarsThunk } from '../redux/operations';
import { selectCars } from '../redux/selectors';

export const Catalog = () => {
  const [, setCurrentPage] = useState(1);
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCarsThunk({}));
  }, [dispatch]);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => {
      const nextPage = prevPage + 1;
      dispatch(fetchCarsThunk({ page: nextPage }));
      return nextPage;
    });
  };

  // const isLastPage =

  return (
    <StyledCatalogContainer>
      <SearchBar />
      <SearchResults
        cars={cars}
        handleLoadMore={handleLoadMore}
        // isLastPage={isLastPage}
      />
    </StyledCatalogContainer>
  );
};

const StyledCatalogContainer = styled.div`
  margin: 50px 115px;
`;
