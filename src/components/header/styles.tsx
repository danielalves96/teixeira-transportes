import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 80px;
  background-color: #fff;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 250px;
  cursor: pointer;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 45px;
  padding: 0;
  margin: 0;

  @media (max-width: 1000px) {
    display: none;
  }
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
  padding: 10px;
  border-radius: 5px;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #121d38;
  }
`;

export const ListItem = styled.li`
  margin-right: 10px;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  cursor: pointer;

  &:hover {
    color: #26aee5;
  }
`;
