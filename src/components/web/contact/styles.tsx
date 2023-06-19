import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  color: #333333;
  max-width: 610px;
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

export const Form = styled.form`
  max-width: 610px;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 610px;
    height: 45px;
    padding: 16px;
    border: 2px solid #d6d6d6;
    filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
    border-radius: 8px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 24px;
  }
  textarea {
    width: 610px;
    height: 45px;
    padding: 16px;
    border: 2px solid #d6d6d6;
    filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
    border-radius: 8px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 24px;
    height: 124px;
  }
  button {
    background-color: #1c2d56;
    border: 1px solid #1c2d56;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: fit-content;
    margin-top: 24px;

    &:hover {
      background-color: #121d38;
    }
  }
`;
