import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

export const Title = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  color: #333333;
`;

export const Subitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #333333;
  margin-bottom: 40px;
  margin-top: 24px;
  max-width: 610px;
`;

export const Numbers = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 20px 7px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: Flex;
  padding: 25px;
  gap: 25px;
`;

export const Number = styled.div`
  width: 336px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Divider = styled.div`
  height: 240px;
  border-right: 2px solid #d6d6d6;
`;

export const ContentTitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 70px;
  line-height: 85px;
  color: #1c2d56;
  span {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 70px;
    line-height: 85px;
    color: #26aee5;
  }
`;

export const ContentSubtitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  display: flex;
  justify-content: center;
  color: #333333;
`;

export const ContentDescription = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  display: flex;
  justify-content: center;
  color: #333333;
  margin-top: 15px;
`;
