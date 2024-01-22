import { Modal } from './Modal';
import { useEffect, useState } from 'react';
import heartImg from '../img/svg/heart.svg';
import blueHeartImg from '../img/svg/blueHeart.svg';
import {
  Image,
  StyledButton,
  StyledCarCard,
  StyledCarInfo,
  StyledCarName,
  StyledHeartBtn,
  StyledImgContainer,
} from '../styles/styled';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorites, deleteFavorites } from '../redux/rentalSlice';
import { selectFavorites } from '../redux/selectors';

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

  const fav = useSelector(selectFavorites);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsFavorite(fav.some((favItem) => favItem.id === id));
  }, [fav, id]);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(deleteFavorites(id));
    } else {
      dispatch(addFavorites(car));
    }
  };

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
          <StyledHeartBtn onClick={handleFavoriteClick}>
            {isFavorite ? (
              <img alt="blue heart btn" src={blueHeartImg} />
            ) : (
              <img alt="heart btn" src={heartImg} />
            )}
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
