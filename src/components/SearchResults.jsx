import { styled } from 'styled-components';
import { CarCard } from './CarCard';

export const SearchResults = ({ cars, handleLoadMore, isLastPage }) => {
  return (
    <div>
      <StyledSearchResultsContainer>
        <ul>
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </ul>
      </StyledSearchResultsContainer>
      {!isLastPage && (
        <StyledBtn type="button" onClick={handleLoadMore}>
          Load more
        </StyledBtn>
      )}
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
