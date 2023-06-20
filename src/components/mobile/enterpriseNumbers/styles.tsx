import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
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
  font-size: 18px;
  text-align: center;
  color: #333333;
`;

export const Subitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
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
  width: 98%;
  display: Flex;
  flex-direction: column;
  padding: 25px;
  gap: 25px;
`;

export const Number = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Divider = styled.div`
  border-bottom: 2px solid #d6d6d6;
`;

export const ContentTitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;

  color: #1c2d56;
  span {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;

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
  font-size: 14px;
  text-align: center;
  display: flex;
  justify-content: center;
  color: #333333;
  margin-top: 15px;
`;
