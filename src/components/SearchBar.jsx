import { useState } from 'react';
import { styled } from 'styled-components';
import Select from 'react-select';

export const SearchBar = () => {
  // const [fromMileage, setFromMileage] = useState('');
  // const [toMileage, setToMileage] = useState('');

  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);

  const handleBrandChange = (selectedOption) => {
    setSelectedBrand(selectedOption);
  };

  const handlePriceChange = (selectedOption) => {
    setSelectedPrice(selectedOption);
  };
  return (
    <StyledFormContainer>
      <StyledForm>
        <StyledSelectsCont>
          <StyledSelectContainer>
            <p>Car brand</p>
            <Select
              placeholder="Enter the text"
              value={selectedBrand}
              onChange={handleBrandChange}
              width={224}
              styles={customStyles}
              components={{
                IndicatorSeparator: () => null,
              }}
              options={carOptions.map((brand) => ({
                value: brand,
                label: brand,
              }))}
            />
          </StyledSelectContainer>
          <StyledSelectContainer>
            <p>Price/ 1 hour</p>
            <Select
              placeholder="To $"
              value={selectedPrice}
              onChange={handlePriceChange}
              width={125}
              styles={customStyles}
              components={{
                IndicatorSeparator: () => null,
              }}
              options={priceOptions.map((price) => ({
                value: price,
                label: `${price}$`,
              }))}
            />
          </StyledSelectContainer>
          <StyledSelectContainer>
            <p>Сar mileage / km</p>
            <StyledTextField>
              <input id="from" placeholder="From" />
              <input id="to" placeholder="To" />
            </StyledTextField>
          </StyledSelectContainer>
        </StyledSelectsCont>
        <StyledFormBtn type="submit">Search</StyledFormBtn>
      </StyledForm>
    </StyledFormContainer>
  );
};

const carOptions = [
  'Buick',
  'Volvo',
  'HUMMER',
  'Subaru',
  'Mitsubishi',
  'Nissan',
  'Lincoln',
  'GMC',
  'Hyundai',
  'MINI',
  'Bentley',
  'Mercedes-Benz',
  'Aston Martin',
  'Pontiac',
  'Lamborghini',
  'Audi',
  'BMW',
  'Chevrolet',
  'Mercedes-Benz',
  'Chrysler',
  'Kia',
  'Land',
];

const priceOptions = Array.from({ length: 49 }, (_, index) => 20 + index * 10);

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    width: state.selectProps.width,
    height: 48,
    border: 'none',
    borderRadius: '10px',
    background: '#F7F7FB',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#121417',
    fontFamily: 'Manrope',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '20px',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'rgba(18, 20, 23, 0.2)',
  }),
  option: (provided) => ({
    ...provided,
    color: 'rgba(18, 20, 23, 0.2)',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: 'black',
  }),
  // menuList: (base) => ({
  //   ...base,
  //   height: '100%',

  //   '::-webkit-scrollbar': {
  //     width: '8px',
  //   },
  //   '::-webkit-scrollbar-track': {
  //     background: 'inset 0 0 2px rgba(0, 0, 0, 0.2)',
  //   },
  //   '::-webkit-scrollbar-thumb': {
  //     background: ' var(--transparency-20)',
  //   },
  //   '::-webkit-scrollbar-thumb:hover': {
  //     background: ' var(--transparency-20)',
  //   },
  // }),
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
`;

const StyledSelectsCont = styled.div`
  display: flex;
  gap: 18px;
`;

const StyledSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  p {
    color: #8a8a89;
    font-size: 14px;
    line-height: 1.3;
    margin-bottom: 8px;
  }
`;

const StyledTextField = styled.div`
  display: flex;
  input {
    width: 160px;
    height: 48px;
    border: none;
    background: #f7f7fb;
    padding-left: 24px;

    &:first-child {
      border-radius: 14px 0 0 14px;
      border-right: 1px solid rgba(138, 138, 137, 0.2);
    }

    &:last-child {
      border-radius: 0 14px 14px 0;
    }

    &::placeholder {
      color: #121417;
      font-family: Manrope;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
      // TODO: maybe configure fonts separately as in the previous homework
    }
  }
`;

const StyledFormBtn = styled.button`
  width: 136px;
  height: 48px;
  border: none;
  border-radius: 12px;
  background: #3470ff;
  color: var(--White, #fff);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  margin-top: 25px;
  cursor: pointer;
  &:hover {
    background: #0b44cd;
  }
`;
