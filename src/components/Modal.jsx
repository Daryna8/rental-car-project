import closeImg from '../img/svg/close.svg';
import { useCallback, useEffect, useRef } from 'react';
import {
  BadgeContainer,
  StyledBackdrop,
  StyledCarCardModal,
  StyledCarInfoModal,
  StyledCarNameModal,
  StyledCloseBtn,
  StyledDescription,
  StyledModalButton,
  StyledModalImg,
  StyledSubTitle,
} from '../styles/styled';

export const Modal = ({
  car: {
    year,
    make,
    model,
    description,
    img,
    rentalConditions,
    address,
    id,
    type,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    mileage,
    rentalPrice,
  },
  closeModal,
}) => {
  const ref = useRef();

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  const handleClickBackdrop = useCallback(
    (event) => {
      if (event.target === ref.current) {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown, closeModal]);

  const addressParts = address.split(', ');
  const city = addressParts[1];
  const country = addressParts[2];

  const Badge = ({ label, value }) => (
    <BadgeContainer>
      <span>{label} </span>
      {value && <span>:</span>}
      <span className="highlight">{value}</span>
    </BadgeContainer>
  );

  return (
    <StyledBackdrop onClick={handleClickBackdrop} ref={ref}>
      <StyledCarCardModal>
        <StyledCloseBtn onClick={closeModal}>
          <img alt="close btn" src={closeImg}></img>
        </StyledCloseBtn>

        <div>
          <StyledModalImg src={img} alt="car image" />
          <div>
            <StyledCarNameModal>
              <div>
                {make} <span> {model}</span>, {year}
              </div>{' '}
            </StyledCarNameModal>
            <StyledCarInfoModal>
              {city} | {country} | Id: {id} | Year: {year} | Type: {type} <br />{' '}
              Fuel Consumption: {fuelConsumption} | Engine Size: {engineSize}
            </StyledCarInfoModal>
            <StyledDescription>{description}</StyledDescription>
            <StyledSubTitle>Accessories and functionalities:</StyledSubTitle>
            <StyledCarInfoModal>
              {accessories.join(' | ')} <br />
              {functionalities.join(' | ')}
            </StyledCarInfoModal>
            <StyledSubTitle>Rental Conditions: </StyledSubTitle>
            <div>
              {rentalConditions?.split('\n').map((condition) => {
                const [label, value] = condition
                  .split(':')
                  .map((str) => str.trim());

                return <Badge key={condition} label={label} value={value} />;
              })}
              <Badge label="Mileage" value={mileage?.toLocaleString('en-US')} />
              <Badge label="Price" value={`${rentalPrice.replace('$', '')}$`} />
            </div>
            <StyledModalButton as="a" href="tel:+380730000000">
              Rental car
            </StyledModalButton>
          </div>
        </div>
      </StyledCarCardModal>
    </StyledBackdrop>
  );
};
