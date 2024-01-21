import { styled } from 'styled-components';
import closeImg from '../img/svg/close.svg';
import { useEffect } from 'react';

export const Modal = ({
  car: { year, make, model, description, img, rentalConditions },
  closeModal,
}) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    const handleClickOutside = (event) => {
      if (event.target === event.currentTarget) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [closeModal]);

  return (
    <StyledBackdrop onClick={closeModal}>
      <StyledCarCardModal>
        <StyledCloseBtn onClick={closeModal}>
          <img alt="close btn" src={closeImg}></img>
        </StyledCloseBtn>

        <div>
          <Image src={img} alt="car image" />
          <div>
            <StyledCarName>
              <div>
                {make} <span> {model}</span>, {year}
              </div>{' '}
            </StyledCarName>
            <StyledCarInfoModal>
              Kiev | Ukraine | Luxury Car Rentals | Premium Suv | Enclave | 9582
              | Power liftgate
            </StyledCarInfoModal>
            <StyledDescription>{description}</StyledDescription>
            <StyledSubTitle>Accessories and functionalities:</StyledSubTitle>
            <StyledCarInfoModal>
              Leather seats | Panoramic sunroof | Power liftgate | Premium audio
              system | Remote start | Blind-spot monitoring
            </StyledCarInfoModal>
            <StyledSubTitle>Rental Conditions: </StyledSubTitle>
            <StyledConditions>{rentalConditions}</StyledConditions>
            <StyledModalButton as="a" href="tel:+380730000000">
              Rental car
            </StyledModalButton>
          </div>
        </div>
      </StyledCarCardModal>
    </StyledBackdrop>
  );
};

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(18, 20, 23, 0.5);
  backdrop-filter: blur(3px);
  z-index: 20;
`;

const StyledCarCardModal = styled.div`
  width: 541px;
  height: 752px;
  border-radius: 24px;
  background: #fff;
  overflow: hidden;
  padding: 24px 73px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  z-index: 2;
`;

const StyledCloseBtn = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 16px;
`;

const Image = styled.img`
  width: 461px;
  height: 248px;
  border-radius: 14px;
  margin-top: 25px;
  margin-bottom: 14px;
`;

const StyledCarName = styled.h2`
  display: flex;
  justify-content: space-between;
  color: #121417;
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 8px;
  span {
    padding-left: 3px;
    color: #3470ff;
  }
`;

const StyledCarInfoModal = styled.p`
  /* width: 277px; */
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 14px;
`;

const StyledDescription = styled.p`
  color: #121417;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  margin-bottom: 24px;
`;

const StyledSubTitle = styled.h3`
  color: #121417;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: 8px;
`;

const StyledConditions = styled.p`
  border-radius: 35px;
  background: #f9f9f9;
  margin-bottom: 24px;
`;

const StyledModalButton = styled.button`
  display: inline-flex;
  width: 168px;
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
