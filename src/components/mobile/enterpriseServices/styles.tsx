import styled from 'styled-components';

export const ServicesWrapper = styled.div`
  width: 100%;
  background-color: #e7e7e7;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

export const Title = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  color: #1c2d56;
  margin-bottom: 10px;
`;

export const Subtitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
  color: #1c2d56;
  margin-bottom: 30px;
`;

export const ServiceSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 140px;
  justify-content: start;
  text-align: center;
  align-items: center;

  span {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 21px;
    text-align: center;
    color: #333333;
  }
`;

export const Icon = styled.img`
  width: 70px;
`;
