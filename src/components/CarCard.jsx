import { styled } from 'styled-components';
import { Modal } from './Modal';
import { useState } from 'react';
import heartImg from '../img/svg/heart.svg';

export const CarCard = ({ car }) => {
  const { year, make, model, rentalPrice, img } = car;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMoreClick = () => {
    setIsModalOpen(true);
  };

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
              {make} <span> {model}</span>, {year}
            </div>{' '}
            <div>{rentalPrice}</div>
          </StyledCarName>
          <StyledCarInfo>
            Kiev | Ukraine | Luxury Car Rentals | Premium Suv | Enclave | 9582 |
            Power liftgate
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

const StyledCarCard = styled.li`
  display: flex;
  width: 274px;
  height: 426px;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  margin-bottom: 44px;
`;

const StyledImgContainer = styled.div`
  position: relative;
`;

const StyledHeartBtn = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 14px;
  right: 14px;
`;

const Image = styled.img`
  width: 274px;
  height: 268px;
  border-radius: 14px;
`;

const StyledCarName = styled.h2`
  display: flex;
  justify-content: space-between;
  color: #121417;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 8px;
  span {
    padding-left: 3px;
    color: #3470ff;
  }
`;

const StyledCarInfo = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 28px;
`;

const StyledButton = styled.button`
  display: flex;
  width: 274px;
  height: 44px;
  justify-content: center;
  align-items: center;
  border: none;

  border-radius: 12px;
  background: #3470ff;
  color: var(--White, #fff);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  cursor: pointer;
  &:hover {
    background: #0b44cd;
  }
`;
