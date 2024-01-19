import { styled } from 'styled-components';
import { CarCard } from './CarCard';

export const SearchResults = ({ cars }) => {
  return (
    <div>
      <StyledSearchResultsContainer>
        <ul>
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </ul>
      </StyledSearchResultsContainer>
      <StyledBtn type="button">Load more</StyledBtn>
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
    margin-bottom: 100px;
  }
`;

const StyledBtn = styled.button`
  display: flex;
`;
