import { styled } from 'styled-components';
import { CarCard } from './CarCard';
import { useState } from 'react';

export const SearchResults = ({ cars }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const itemsPerPage = 12;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedCars = cars.slice(startIndex, endIndex);

  return (
    <div>
      <StyledSearchResultsContainer>
        <ul>
          {displayedCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </ul>
      </StyledSearchResultsContainer>
      <StyledBtn type="button" onClick={handleLoadMore}>
        Load more
      </StyledBtn>
    </div>
  );
};

const StyledSearchResultsContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;

  ul {
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 29px;
    justify-content: space-between;
    margin-bottom: 56px;
  }
`;

const StyledBtn = styled.button`
  display: flex;
  margin: 0 auto;
  cursor: pointer;
  background-color: transparent;
  outline: none;
  border: none;
  color: #3470ff;
  font-size: 16px;
  line-height: 1.5;
  text-decoration-line: underline;
  &:hover {
    color: #0b44cd;
  }
`;
