import styled from 'styled-components';

export const CarrouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(40%);
`;

export const CarrouselImgWrapper = styled.div`
  width: 100%;
`;

export const CarrouselWrapper = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 250px;
  text-align: center;
`;

export const Copy = styled.div`
  width: 300px;
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 29px;
  color: rgb(255, 255, 255);
  text-shadow: rgba(0, 0, 0, 0.72) 2px 2px 3px;
`;
