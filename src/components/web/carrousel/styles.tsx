import styled from 'styled-components';

export const CarrouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(40%);
`;

export const CarrouselImgWrapper = styled.div`
  width: 100%;
  height: 500px;
`;

export const CarrouselWrapper = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 500px;
  gap: 80px;
`;

export const Slogan = styled.div`
  max-width: 364px;
  background: rgb(26, 45, 86);
  border-radius: 8px;
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  color: rgb(255, 255, 255);
  padding: 16px;
`;

export const Copy = styled.div`
  width: 398px;
  height: 116px;
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: rgb(255, 255, 255);
  text-shadow: rgba(0, 0, 0, 0.72) 2px 2px 3px;
`;
