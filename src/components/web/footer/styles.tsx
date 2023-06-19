import styled from 'styled-components';

export const FooterWrapper = styled.div`
  width: 100%;

  background-color: #1c2d56;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SectionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 135px;
  border-bottom: 1px solid #ffffff;
  padding-bottom: 60px;
`;

export const Credits = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  flex-direction: column;
  padding-top: 50px;
`;

export const Rights = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #7a7a7a;
`;

export const Author = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #ffffff;
  a {
    text-decoration: none;
    color: #ffffff;

    &:hover {
      color: #26aee5;
    }
  }
`;

export const Title = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
`;

export const OurSite = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 35px;
  color: #ffffff;
`;

export const Description = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  margin-top: 21px;
`;

export const List = styled.ul`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  line-height: 32px;

  li {
    cursor: pointer;

    &:hover {
      color: #26aee5;
    }
  }
`;

export const Img = styled.img`
  margin-bottom: 33px;
`;

export const SectionOne = styled.div`
  width: 350px;
`;

export const SectionTwo = styled.div`
  width: 167px;
  margin-top: 20px;
`;

export const SectionThree = styled.div`
  width: 288px;
  margin-top: 20px;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const ContactItem = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const ContactItemText = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
`;

export const ContactIcon = styled.img`
  width: 24px;
  height: 24px;
`;
