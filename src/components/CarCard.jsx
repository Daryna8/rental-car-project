import { Modal } from './Modal';
import { useState } from 'react';
import heartImg from '../img/svg/heart.svg';
import {
  Image,
  StyledButton,
  StyledCarCard,
  StyledCarInfo,
  StyledCarName,
  StyledHeartBtn,
  StyledImgContainer,
} from '../styles/styled';

export const CarCard = ({ car }) => {
  const {
    year,
    make,
    model,
    rentalPrice,
    img,
    address,
    rentalCompany,
    id,
    functionalities,
    type,
  } = car;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMoreClick = () => {
    setIsModalOpen(true);
  };

  const addressParts = address.split(', ');
  const city = addressParts[1];
  const country = addressParts[2];

  return (
    <div>
      <StyledCarCard>
        <StyledImgContainer>
          <StyledHeartBtn>
            <img alt="heart btn" src={heartImg}></img>
          </StyledHeartBtn>
          <Image src={img} alt="car image" />
        </StyledImgContainer>
        <div>
          <StyledCarName>
            <div>
              {make}
              {make.length < 10 && <span>{model}</span>}, {year}
            </div>
            <div>{rentalPrice}</div>
          </StyledCarName>
          <StyledCarInfo>
            {city} | {country} | {rentalCompany} | {type} | {model} | {id} |{' '}
            {functionalities[0].length > 20
              ? `${functionalities[0].slice(0, 20)}...`
              : functionalities[0]}
          </StyledCarInfo>
          <StyledButton type="button" onClick={handleLearnMoreClick}>
            Learn more
          </StyledButton>
        </div>
        {isModalOpen && (
          <Modal car={car} closeModal={() => setIsModalOpen(false)} />
        )}
      </StyledCarCard>
    </div>
  );
};
