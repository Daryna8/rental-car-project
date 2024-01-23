import { CarCard } from './CarCard';
import { StyledBtnRes, StyledSearchResultsContainer } from '../styles/styled';

export const SearchResults = ({
  cars,
  handleLoadMore,
  disableLoadMore,
  loading,
}) => {
  return (
    <div>
      <StyledSearchResultsContainer>
        {loading ? (
          <b>loading...</b>
        ) : (
          <ul>
            {cars?.length ? (
              cars.map((car) => <CarCard key={car.id} car={car} />)
            ) : (
              <div>No cars found</div>
            )}
          </ul>
        )}
      </StyledSearchResultsContainer>
      {!disableLoadMore && (
        <StyledBtnRes type="button" onClick={handleLoadMore}>
          Load more
        </StyledBtnRes>
      )}
    </div>
  );
};
