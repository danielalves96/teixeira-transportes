import styled from 'styled-components';

export const ServicesWrapper = styled.div`
  width: 100%;
  background-color: #e7e7e7;
  padding: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 54px;
  line-height: 65px;
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
  margin-bottom: 60px;
`;

export const ServiceSection = styled.div`
  display: flex;
  gap: 100px;
`;

export const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 214px;
  justify-content: start;
  text-align: center;
  align-items: center;

  span {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
    text-align: center;
    color: #333333;
  }
`;

export const Icon = styled.img`
  width: 140px;
`;
