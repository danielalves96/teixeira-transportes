import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  background: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 58px;
  color: #1c2d56;
`;

export const Logos = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  height: 44px;
`;
