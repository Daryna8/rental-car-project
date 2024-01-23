import styled from 'styled-components';
import autovistaImage from '../img/homepage.jpg';

// header
export const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 72px;
  background: linear-gradient(
    120deg,
    #569eb0 31%,
    #427f8f 61.46%,
    #11809f 90.54%
  );
`;

export const StyledHomeNav = styled.div`
  display: flex;
  align-items: center;
  margin-left: 35px;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #d0c5c5;
    font-family: 'Dancing Script';
    font-size: 48px;
    padding-left: 20px;

    img {
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }
  }
`;

export const StyledNavigation = styled.div`
  display: flex;
  margin-right: 30px;
  a {
    color: #d0c5c5;
    text-decoration: none;
    font-family: 'Dancing Script';
    font-size: 38px;
    padding: 15px;
    &.active {
      color: white;
    }
  }
`;

//home page
export const StyledPageContainer = styled.div`
  background-image: url(${autovistaImage});
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: -72px;
`;

export const StyledHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

export const StyledMainInfo = styled.p`
  width: 900px;
  margin: 80px auto;
  font-size: 32px;
  font-weight: 400;
  text-align: center;
  span {
    color: #1256aa;
    font-family: 'Dancing Script';
    font-size: 58px;
  }
`;

//catalog
export const StyledCatalogContainer = styled.div`
  margin: 50px 115px;
`;

//car card
export const StyledCarCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 274px;
  height: 426px;
  margin-bottom: 44px;
`;

export const StyledImgContainer = styled.div`
  position: relative;
`;

export const StyledHeartBtn = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 14px;
  right: 14px;
`;

export const Image = styled.img`
  width: 274px;
  height: 268px;
  margin-bottom: 14px;
  border-radius: 14px;
  object-fit: cover;
`;

export const StyledCarName = styled.h2`
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

export const StyledCarInfo = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 25px;
`;

export const StyledButton = styled.button`
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

//modal
export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(18, 20, 23, 0.5);
  backdrop-filter: blur(3px);
  z-index: 20;
`;

export const StyledCarCardModal = styled.div`
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

export const StyledCloseBtn = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const StyledModalImg = styled.img`
  width: 461px;
  height: 248px;
  border-radius: 14px;
  margin-top: 25px;
  margin-bottom: 14px;
  object-fit: cover;
`;

export const StyledCarNameModal = styled.h2`
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

export const StyledCarInfoModal = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 14px;
`;

export const StyledDescription = styled.p`
  color: #121417;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  margin-bottom: 24px;
`;

export const StyledSubTitle = styled.h3`
  color: #121417;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: 8px;
`;

export const BadgeContainer = styled.div`
  display: inline-flex;
  padding: 7px 14px;
  margin: 0 8px 8px 0;
  border-radius: 35px;
  background: #f9f9f9;
  color: #363535;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.24px;

  & > span {
    justify-content: center;
    align-items: center;
  }

  & .highlight {
    color: #3470ff;
    font-weight: 600;
  }
`;

export const StyledModalButton = styled.button`
  width: 168px;
  height: 44px;
  margin-top: 16px;
  display: inline-flex;
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

//favorites
export const StyledFavContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1500px;
  margin: 30px 80px;
  ul {
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 29px;
  }
`;

export const StyledFavText = styled.p`
  margin: 20px 80px;
  font-size: 28px;
`;

export const StyledFavTitle = styled.h2`
  font-size: 22px;
  margin-bottom: 30px;
  margin-left: 65px;
  color: #8a8a89;
`;
