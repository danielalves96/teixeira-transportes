import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: #fff;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 150px;
  cursor: pointer;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 45px;
`;

export const Button = styled.button`
  background-color: #1c2d56;
  border: 1px solid #1c2d56;
  color: #fff;
  padding: 6px;
  border-radius: 5px;
  font-weight: 500;
  font-size: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #121d38;
  }
`;
