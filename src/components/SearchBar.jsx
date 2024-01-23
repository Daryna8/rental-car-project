import Select from 'react-select';
import {
  StyledForm,
  StyledFormBtn,
  StyledFormContainer,
  StyledSelectContainer,
  StyledSelectsCont,
  StyledTextField,
} from '../styles/styled';

export const SearchBar = ({
  handleSearch,
  selectedBrand,
  selectedPrice,
  fromMileage,
  toMileage,
  handleBrandChange,
  handlePriceChange,
  handleToMileageChange,
  handleFromMileageChange,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <StyledFormContainer>
      <StyledForm onSubmit={onSubmit}>
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
              <input
                id="from"
                value={fromMileage}
                onChange={handleFromMileageChange}
                placeholder="From"
              />
              <input
                id="to"
                value={toMileage}
                onChange={handleToMileageChange}
                placeholder="To"
              />
            </StyledTextField>
          </StyledSelectContainer>
        </StyledSelectsCont>
        <StyledFormBtn
          type="submit"
          disabled={
            !(selectedPrice || selectedBrand || fromMileage || toMileage)
          }
        >
          Search
        </StyledFormBtn>
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
    fontSize: '18px',
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
};
