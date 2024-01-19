import { styled } from 'styled-components';

export const SearchBar = () => {
  return (
    <StyledFormContainer>
      <StyledForm>
        <input type="text" placeholder="Enter the text" />
        <input type="text" placeholder="To $" />
        <input type="text" placeholder="From" />
        <input type="text" placeholder="To" />
        <StyledFormBtn type="submit">Search</StyledFormBtn>
      </StyledForm>
    </StyledFormContainer>
  );
};

const StyledFormContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  width: 859px;
  margin-bottom: 50px;

  input {
    width: 125px;
  }
`;

const StyledFormBtn = styled.button`
  width: 136px;
  height: 48px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  background: #3470ff;
  color: var(--White, #fff);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
`;
